import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { TABLE_PREFIX } from '../constants';
import { Garage } from '../../garage/entities/garage.entity';
import { UserVehicle } from '../../end-user/entities/user-vehicle.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { ServiceLogType } from './enums/service-log-type.enum';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @FilterableField({ nullable: true })
  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  date: Date;

  @Field({ nullable: true })
  @Column({ type: 'decimal', nullable: true })
  mileage?: number;

  @FilterableField(() => ServiceLogType)
  @Column()
  type: ServiceLogType;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('garage', () => Garage, { nullable: true })
@FilterableRelation('vehicle', () => UserVehicle)
@Entity({ name: `${TABLE_PREFIX}_logs` })
export class ServiceLog extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => UserVehicle, genXToOneOptions())
  vehicle: UserVehicle

  @Column("text", { array: true, default: [] })
  media: string[];

  @ManyToOne(() => Garage, genXToOneOptions({ nullable: true }))
  garage?: Garage;

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
export class ServiceLogDTO extends BaseClass {
  @FilterableField(() => ID)
  vehicle: UserVehicle

  @FilterableField(() => ID, { nullable: true })
  garage: Garage;

  @Field(() => [ID], { nullable: true })
  media: string[];

}