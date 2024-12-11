import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  refId: string;
  
  @FilterableField()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  logo?: string;

  @FilterableField(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  startYear?: number

  @FilterableField(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  endYear?: number

  @Field(() => GraphQLJSON, { nullable: true })
  @Column({ type: 'jsonb', nullable: true })
  metadata?: any
}

/**
 * Entity
 */
@ObjectType()
@Entity({ name: `${TABLE_PREFIX}_brands` })
export class VehicleBrand extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

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
export class VehicleBrandDTO extends BaseClass {
}