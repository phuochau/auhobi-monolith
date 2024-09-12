import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BaseEntity } from 'typeorm';
import { Org } from './org.entity';
import { ObjectType, InputType, ID, registerEnumType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { OrgRole } from './enums/ORG-role.enum';
import { Account } from '../../core/auth/entities/account.entity';

registerEnumType(OrgRole, {
  name: 'OrgRole',
})

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField(() => OrgRole)
  @Column('int', { default: OrgRole.MEMBER })
  role: OrgRole;
  
  @FilterableField({ nullable: true })
  @Column({ default: true })
  enabled: boolean;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('account', () => Account)
@FilterableRelation('org', () => Org)
@Entity({ name: `${TABLE_PREFIX}_org_members` })
export class OrgMember extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id?: string;
  
  @ManyToOne(() => Account)
  account: Account;
  
  @ManyToOne(() => Org, org => org.members)
  org?: Org;

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
export class OrgMemberDTO extends BaseClass {
  @FilterableField(() => ID)
  account: Account;
  
  @FilterableField(() => ID, { nullable: true })
  org: Org;
}
