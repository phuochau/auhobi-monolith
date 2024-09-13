import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BeforeCreateOne, BeforeFindOne, BeforeQueryMany, CreateOneInputType, FilterableField, FilterableRelation, FindOneArgsType } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { TABLE_PREFIX } from '../constants';
import { VehicleModel } from '../../vehicle/entities/vehicle-model.entity';
import { Query } from '@ptc-org/nestjs-query-core';
import _ from 'lodash';
import { VehicleModelBody } from '../../../modules/vehicle/entities/vehicle-model-body.entity';
import { VehicleEngine } from '../../../modules/vehicle/entities/vehicle-engine.entity';
import { VehicleTransmission } from '../../../modules/vehicle/entities/vehicle-transmission.entity';
import { UserVechileStatus } from './enums/user-vehicle-status.enum';
import { User } from './user.entity';
import { GqlContext } from '../../core/graphql/types/gql-context';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  pic: string;

  @FilterableField(() => UserVechileStatus, { nullable: true })
  @Column({  nullable: false, default: UserVechileStatus.ACTIVATED })
  status: UserVechileStatus;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata: any
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('owner', () => User)
@FilterableRelation('model', () => VehicleModel)
@FilterableRelation('body', () => VehicleModelBody)
@FilterableRelation('engine', () => VehicleEngine)
@FilterableRelation('transmission', () => VehicleTransmission)
@Entity({ name: `${TABLE_PREFIX}_vehicles` })
@BeforeFindOne((input: FindOneArgsType, context: GqlContext) => {
  input.id = context.req.user?.id
  return input;
})
@BeforeQueryMany((input: Query<UserVehicleDTO>, context: GqlContext) => {
  input.filter.owner = { id: { eq: context.req.user?.id } }
  return input;
})
export class UserVehicle extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  owner: User

  @ManyToOne(() => VehicleModel, genXToOneOptions())
  model: VehicleModel;

  @ManyToOne(() => VehicleModelBody, genXToOneOptions())
  body: VehicleModelBody;

  @ManyToOne(() => VehicleEngine, genXToOneOptions())
  engine: VehicleEngine;

  @ManyToOne(() => VehicleTransmission, genXToOneOptions())
  transmission: VehicleTransmission;

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
@BeforeCreateOne((input: CreateOneInputType<UserVehicleDTO>, context: GqlContext) => {
  // TODO: find user and async input.input.owner = context.req.user
  return input;
})
export class UserVehicleDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  owner: User;

  @FilterableField(() => ID)
  model: VehicleModel;

  @FilterableField(() => ID)
  body: VehicleModelBody;

  @FilterableField(() => ID)
  engine: VehicleEngine;

  @FilterableField(() => ID)
  transmission: VehicleTransmission;
}