import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation, IDField } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { VehicleBrand } from './vehicle-brand.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { VehicleBody } from './vehicle-body.entity';
import { VehicleBaseModel } from './vehicle-base-model.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  refId: string;

  @FilterableField()
  @Column()
  name: string;

  @FilterableField(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  startYear?: number

  @FilterableField(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  endYear?: number

  @FilterableField(() => String, { nullable: true })
  @Column({ nullable: true })
  drive?: string

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  engineType?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  fuelType?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  maxPower?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  maxTorque?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  transmission?: string;

  @Field(() => [String], { nullable: true })
  @Column("text", { array: true, default: [] })
  images: string[];

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata?: any
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('body', () => VehicleBody, { update: { enabled: true } })
@FilterableRelation('brand', () => VehicleBrand)
@FilterableRelation('baseModel', () => VehicleBaseModel)
@Entity({ name: `${TABLE_PREFIX}_models` })
export class VehicleModel extends BaseClass {
  @IDField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => VehicleBrand, genXToOneOptions())
  brand: VehicleBrand

  @ManyToOne(() => VehicleBaseModel, genXToOneOptions({ nullable: true }))
  baseModel?: VehicleBaseModel

  @ManyToOne(() => VehicleBody, genXToOneOptions({ nullable: true }))
  body?: VehicleBody

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
export class VehicleModelDTO extends BaseClass {
  @FilterableField(() => ID)
  brand: VehicleBrand

  @FilterableField(() => ID, { nullable: true })
  baseModel?: VehicleBaseModel

  @FilterableField(() => ID, { nullable: true })
  body?: VehicleBody
}