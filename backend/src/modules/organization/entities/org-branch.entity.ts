import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity } from 'typeorm';
import { Org } from './org.entity';
import { OrgBranchMember, OrgBranchMemberDTO } from './org-branch-member.entity';
import { ObjectType, InputType, ID } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { genXToManyOptions } from '../../core/database/helpers/genXToManyOptions';
import { OrgBranchStatus } from './enums/org-branch-status.enum';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column()
  name: string;
  
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  phone_number: string;
  
  @FilterableField(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  details: string;
  
  @FilterableField(() => OrgBranchStatus, { nullable: false })
  @Column({ nullable: false, default: OrgBranchStatus.ACTIVATED })
  status: OrgBranchStatus;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('org', () => Org)
@FilterableOffsetConnection('members', () => OrgBranchMember, { update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_org_branches` })
export class OrgBranch extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Org, org => org.branches, { nullable: true })
  org: Org;

  @OneToMany(() => OrgBranchMember, member => member.branch, genXToManyOptions({ nullable: true }))
  members: OrgBranchMember[];

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
export class OrgBranchDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  org: Org;

  @FilterableField(() => [OrgBranchMemberDTO], { nullable: true })
  members: OrgBranchMember[];
}