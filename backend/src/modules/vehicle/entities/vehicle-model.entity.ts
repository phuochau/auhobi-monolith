import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation, FilterableUnPagedRelation, IDField } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { VehicleModelBody, VehicleModelBodyDTO } from './vehicle-model-body.entity';
import { VehicleEngine } from './vehicle-engine.entity';
import { VehicleTransmission } from './vehicle-transmission.entity';
import { VehicleBrand } from './vehicle-brand.entity';
import { genXToOneOptions } from 'src/modules/core/database/helpers/genXToOneOptions';
import { genXToManyOptions } from 'src/modules/core/database/helpers/genXToManyOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column()
  name: string;

  @FilterableField(() => Int)
  @Column({ type: 'int' })
  startYear: number

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata: any
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('parent', () => VehicleModel, { nullable: true })
@FilterableUnPagedRelation('bodies', () => VehicleModelBody, { update: { enabled: true } })
@FilterableRelation('brand', () => VehicleBrand, { nullable: true })
@FilterableUnPagedRelation('engines', () => VehicleEngine)
@FilterableUnPagedRelation('transmissions', () => VehicleTransmission)
@Entity({ name: `${TABLE_PREFIX}_models` })
export class VehicleModel extends BaseClass {
  @IDField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => VehicleBrand, genXToOneOptions())
  @JoinColumn({ name: 'brand_id' })
  brand: VehicleBrand

  @ManyToOne(() => VehicleModel, genXToOneOptions({ nullable: true }))
  @JoinColumn({ name: 'parent_id' })
  parent: VehicleModel

  @ManyToMany(() => VehicleModelBody, (p) => p.model, genXToManyOptions())
  bodies: VehicleModelBody[]

  @ManyToMany(() => VehicleEngine, genXToManyOptions())
  engines: VehicleEngine[]

  @ManyToMany(() => VehicleTransmission, genXToManyOptions())
  transmissions: VehicleTransmission[]

  @FilterableField(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  endYear: number

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
export class VehicleModelDTO extends BaseClass {
  @FilterableField(() => ID)
  brand: VehicleBrand

  @FilterableField(() => ID)
  parent: VehicleModel

  @FilterableField(() => [VehicleModelBodyDTO])
  bodies: VehicleModelBody[]

  @FilterableField(() => [ID])
  engines: VehicleEngine[]

  @FilterableField(() => [ID])
  transmissions: VehicleTransmission[]
}