/**
 * The virtual garage, it can be managed by an organization branch or not
 */
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { GarageStatus } from './enums/garage-status.enum';
import { Org } from '../../organization/entities/org.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { OrgBranch } from '../../organization/entities/org-branch.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  address: string;

  @FilterableField({ nullable: true })
  @Column('decimal', { nullable: true })
  lat: number;

  @FilterableField({ nullable: true })
  @Column('decimal', { nullable: true })
  lng: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  logo: string;

  @Field(() => [String], { nullable: true })
  @Column("text", { array: true, default: [] })
  media: string[];

  @FilterableField(() => GarageStatus, { nullable: true })
  @Column({ nullable: true, default: GarageStatus.ACTIVATED })
  status: GarageStatus;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata: any
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('org', () => Org)
@FilterableRelation('branch', () => OrgBranch)
@Entity({ name: `${TABLE_PREFIX}_garages` })
export class Garage extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => Org, genXToOneOptions({ nullable: true }))
  org?: Org;

  @ManyToOne(() => Org, genXToOneOptions({ nullable: true }))
  branch?: OrgBranch;

  @FilterableField()
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @FilterableField({ nullable: true })
  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;

  @FilterableField({ nullable: true })
  @DeleteDateColumn({ type: "timestamptz", onUpdate: "CURRENT_TIMESTAMP(6)" })
  deleted_at?: Date;
}

/**
 * DTO
 */
@InputType()
export class GarageDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  org: Org
  
  @FilterableField(() => ID, { nullable: true })
  branch: OrgBranch
}