import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { TABLE_PREFIX } from '../constants';
import { Garage, GarageDTO } from '../../garage/entities/garage.entity';
import { UserVehicle } from '../../end-user/entities/user-vehicle.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { ServiceLogType } from './enums/service-log-type.enum';
import { genXToManyOptions } from '../../core/database/helpers/genXToManyOptions';
import { ServiceLogBill, ServiceLogBillDTO } from './service-log-bill.entity';

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

  @Field(() => [String])
  @Column("text", { array: true, default: [] })
  media: string[];
}

/**
 * Entity
 */
@ObjectType()
@FilterableOffsetConnection('bills', () => ServiceLogBill, { nullable: true, update: { enabled: true } })
@FilterableRelation('garage', () => Garage, { nullable: true, update: { enabled: true } })
@FilterableRelation('vehicle', () => UserVehicle)
@Entity({ name: `${TABLE_PREFIX}_logs` })
export class ServiceLog extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => UserVehicle, genXToOneOptions())
  vehicle: UserVehicle

  @ManyToOne(() => Garage, genXToOneOptions({ nullable: true }))
  garage?: Garage;

  @OneToMany(() => ServiceLogBill, item => item.log, genXToManyOptions({ nullable: true }))
  bills?: ServiceLogBill[]

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

  @FilterableField(() => [GarageDTO], { nullable: true })
  garage: Garage;

  @Field(() => [ServiceLogBillDTO], { nullable: true })
  bills?: ServiceLogBillDTO[];

}