import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { VehicleEngineFuel, VehicleEngineFuelDTO } from './vehicle-engine-fuel.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  refId: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  name?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  displacement?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  cylinders?: number;

  @FilterableField({ nullable: true })
  @Column('text', { nullable: true })
  description?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  advancedTechnology?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  evMotor?: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true, default: false })
  phevBlended?: boolean;

  @FilterableField({ nullable: true })
  @Column({ nullable: true, default: false })
  turbocharger?: boolean;

  @FilterableField({ nullable: true })
  @Column({ nullable: true, default: false })
  supercharger?: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata?: any
}

/**
 * Entity
 */
@ObjectType()
@Entity({ name: `${TABLE_PREFIX}_engines` })
export class VehicleEngine extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => VehicleEngineFuel, genXToOneOptions({ nullable: true }))
  fuel?: VehicleEngineFuel

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
export class VehicleEngineDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  fuel?: VehicleEngineFuel
}