import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation, IDField } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { VehicleEngine } from './vehicle-engine.entity';
import { VehicleTransmission } from './vehicle-transmission.entity';
import { VehicleBrand } from './vehicle-brand.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { VehicleSize } from './vehicle-size.entity';
import { VehicleBaseModel } from './vehicle-base-model.entity';
import { VehicleDrive } from './vehicle-drive.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column()
  name: string;

  @FilterableField(() => Int)
  @Column({ type: 'int' })
  manufacturingYear: number

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata?: any
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('size', () => VehicleSize, { update: { enabled: true } })
@FilterableRelation('brand', () => VehicleBrand)
@FilterableRelation('baseModel', () => VehicleBaseModel)
@FilterableRelation('drive', () => VehicleDrive)
@FilterableRelation('engine', () => VehicleEngine)
@FilterableRelation('transmission', () => VehicleTransmission)
@Entity({ name: `${TABLE_PREFIX}_models` })
export class VehicleModel extends BaseClass {
  @IDField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => VehicleBrand, genXToOneOptions())
  brand: VehicleBrand

  @ManyToOne(() => VehicleBaseModel, genXToOneOptions({ nullable: true }))
  baseModel?: VehicleBaseModel

  @ManyToOne(() => VehicleSize, genXToOneOptions({ nullable: true }))
  size?: VehicleSize

  @ManyToOne(() => VehicleEngine, genXToOneOptions({ nullable: true }))
  engine?: VehicleEngine

  @ManyToOne(() => VehicleDrive, genXToOneOptions({ nullable: true }))
  drive?: VehicleDrive

  @ManyToOne(() => VehicleTransmission, genXToOneOptions({ nullable: true }))
  transmission?: VehicleTransmission

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
  size?: VehicleSize

  @FilterableField(() => ID, { nullable: true })
  drive?: VehicleDrive

  @FilterableField(() => ID, { nullable: true })
  engine?: VehicleEngine

  @FilterableField(() => ID, { nullable: true })
  transmission?: VehicleTransmission
}