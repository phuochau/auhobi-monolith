import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { VehicleModel } from './vehicle-model.entity';
import { VehicleBody } from './vehicle-body.entity';
import { genXToOneOptions } from 'src/modules/core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @Field(() => ID)
  @ManyToOne(() => VehicleModel)
  @JoinColumn({ name: 'model_id' })
  model: VehicleModel

  @Field(() => ID)
  @ManyToOne(() => VehicleBody, genXToOneOptions())
  @JoinColumn({ name: 'body_id' })
  body: VehicleBody

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  pic: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('body', () => VehicleBody)
@Entity({ name: `${TABLE_PREFIX}_model_bodies` })
export class VehicleModelBody extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

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
export class VehicleModelBodyDTO extends BaseClass {
}