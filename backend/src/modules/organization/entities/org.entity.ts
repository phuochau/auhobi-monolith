import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity } from 'typeorm';
import { OrgBranch, OrgBranchDTO } from './org-branch.entity';
import { OrgMember, OrgMemberDTO } from './org-member.entity';
import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { BeforeCreateOne, CreateOneInputType, FilterableField, FilterableOffsetConnection, FilterableRelation, QueryOptions } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { OrgRole } from './enums/ORG-role.enum';
import { Account } from '../../core/auth/entities/account.entity';
import { genXToManyOptions } from '../../core/database/helpers/genXToManyOptions';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { GqlContext } from '../../core/graphql/types/gql-context';
import { OrgType } from './enums/org-type.enum';

registerEnumType(OrgType, {
  name: 'OrgType',
})

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField(() => OrgType)
  @Column('int', { default: OrgType.FNB })
  type: OrgType;

  @FilterableField()
  @Column()
  name: string;
  
  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  details: string;
  
  @FilterableField({ nullable: true })
  @Column({ default: true })
  enabled: boolean;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('createdBy', () => Account)
@FilterableOffsetConnection('members', () => OrgMember, { nullable: true, update: { enabled: true } })
@FilterableOffsetConnection('branches', () => OrgBranch, { nullable: true, update: { enabled: true } })
@QueryOptions({ filterDepth: 3 })
@Entity({ name: `${TABLE_PREFIX}_orgs` })
export class Org extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account, genXToOneOptions())
  createdBy: Account

  @OneToMany(() => OrgMember, member => member.account, genXToManyOptions({ nullable: true }))
  members: OrgMember[];

  @OneToMany(() => OrgBranch, team => team.org, genXToManyOptions({ nullable: true }))
  branches: OrgBranch[];

  @FilterableField()
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt?: Date;

  @FilterableField({ nullable: true })
  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt?: Date;

  @FilterableField({ nullable: true })
  @DeleteDateColumn({ type: "timestamptz", onUpdate: "CURRENT_TIMESTAMP(6)" })
  deletedAt?: Date;
}

/**
 * DTO
 */
@InputType()
@BeforeCreateOne((input: CreateOneInputType<OrgDTO>, context: GqlContext) => {
  input.input.createdBy = context.req.user
  input.input.members = [
    { account: context.req.user, role: OrgRole.OWNER } as OrgMember
  ]
  return input;
})
export class OrgDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  createdBy: Account;
  
  @FilterableField(() => [OrgMemberDTO], { nullable: true })
  members: OrgMember[];
  
  @FilterableField(() => [OrgBranchDTO], { nullable: true })
  branches: OrgBranch[];
}