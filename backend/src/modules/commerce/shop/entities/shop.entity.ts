import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity } from 'typeorm';
import { ObjectType, InputType, ID } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { genXToManyOptions } from '../../../core/database/helpers/genXToManyOptions';
import { Org } from 'src/modules/organization/entities/org.entity';
import { ShopMember, ShopMemberDTO } from './shop-member.entity';
import { genXToOneOptions } from 'src/modules/core/database/helpers/genXToOneOptions';
import { OrgBranch } from 'src/modules/organization/entities/org-branch.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column()
  name: string;
  
  @FilterableField(() => GraphQLJSON, { nullable: true })
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
@FilterableRelation('org', () => Org)
@FilterableRelation('branch', () => OrgBranch)
@FilterableOffsetConnection('members', () => ShopMember, { update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_shops` })
export class Shop extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Org)
  org: Org;

  @ManyToOne(() => Org, genXToOneOptions({ nullable: true }))
  branch?: OrgBranch;

  @OneToMany(() => ShopMember, member => member.shop, genXToManyOptions({ nullable: true }))
  members: ShopMember[];

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
export class ShopDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  org: Org;

  @FilterableField(() => ID, { nullable: true })
  branch: OrgBranch;

  @FilterableField(() => [ShopMemberDTO], { nullable: true })
  members: ShopMember[];
}