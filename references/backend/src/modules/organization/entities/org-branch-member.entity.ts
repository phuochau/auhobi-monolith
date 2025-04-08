import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BaseEntity } from 'typeorm';
import { OrgBranch } from './org-branch.entity';
import { ObjectType, InputType, ID } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { OrgBranchRole } from './enums/org-branch-role.enum';
import { Account } from '../../core/auth/entities/account.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField(() => OrgBranchRole)
  @Column('int', { default: OrgBranchRole.VIEWER })
  role: OrgBranchRole;
  
  @FilterableField({ nullable: true })
  @Column({ default: true })
  enabled: boolean;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('account', () => Account)
@FilterableRelation('branch', () => OrgBranch)
@Entity({ name: `${TABLE_PREFIX}_org_branch_members` })
export class OrgBranchMember extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @ManyToOne(() => Account,  genXToOneOptions())
  account: Account;

  @ManyToOne(() => OrgBranch, branch => branch.members)
  branch: OrgBranch;

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
export class OrgBranchMemberDTO extends BaseClass {
  @FilterableField(() => ID)
  account: Account;

  @FilterableField(() => ID, { nullable: true })
  branch: OrgBranch;
}
