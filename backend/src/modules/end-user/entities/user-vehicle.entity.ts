import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BeforeCreateOne, CreateOneInputType, FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';
import { TABLE_PREFIX } from '../constants';
import { VehicleModel } from '../../vehicle/entities/vehicle-model.entity';
import _ from 'lodash';
import { UserVechileStatus as UserVechicleStatus } from './enums/user-vehicle-status.enum';
import { User } from './user.entity';
import { GqlContext } from '../../core/graphql/types/gql-context';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  customModel?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  picture?: string;

  @FilterableField(() => UserVechicleStatus, { nullable: true })
  @Column({  nullable: false, default: UserVechicleStatus.ACTIVATED })
  status: UserVechicleStatus;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata?: any
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('owner', () => User)
@FilterableRelation('model', () => VehicleModel)
@Entity({ name: `${TABLE_PREFIX}_user_vehicles` })
export class UserVehicle extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  owner: User

  @ManyToOne(() => VehicleModel, genXToOneOptions({ nullable: true }))
  model?: VehicleModel;

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
@BeforeCreateOne((input: CreateOneInputType<UserVehicleDTO>, context: GqlContext) => {
  input.input.owner = context.req.user?.user
  return input;
})
export class UserVehicleDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  owner: User;

  @FilterableField(() => ID, { nullable: true })
  model: VehicleModel;
}