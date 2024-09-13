import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { VehicleModel, VehicleModelDTO } from './vehicle-model.entity';
import { VehicleBody, VehicleBodyDTO } from './vehicle-body.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @Field({ nullable: true })
  @Column({ nullable: true })
  picture: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('body', () => VehicleBody)
@FilterableRelation('model', () => VehicleModel)
@Entity({ name: `${TABLE_PREFIX}_model_bodies` })
export class VehicleModelBody extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => VehicleModel)
  model: VehicleModel

  @ManyToOne(() => VehicleBody, genXToOneOptions())
  body: VehicleBody

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
export class VehicleModelBodyDTO extends BaseClass {
  @FilterableField(() => VehicleModelDTO)
  model: VehicleModel

  @FilterableField(() => VehicleBodyDTO)
  body: VehicleBody
}