import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ServiceLog } from './service-log.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  total: number;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  media: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('log', () => ServiceLog)
@Entity({ name: `${TABLE_PREFIX}_log_bills` })
export class ServiceLogBill extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => ServiceLog)
  log: ServiceLog

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
export class ServiceLogBillDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  log: ServiceLog
}