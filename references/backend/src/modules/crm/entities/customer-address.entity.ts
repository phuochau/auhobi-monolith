import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { Customer } from './customer.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    full: string;

    @FilterableField({ nullable: true })
    @Column('decimal', { nullable: true })
    distanceKm: number;

    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    city: string;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    district: string;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    ward: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('customer', () => Customer)
@Entity({ name: `${TABLE_PREFIX}_customer_addresses` })
export class CustomerAddress extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @ManyToOne(() => Customer)
  customer: Customer;

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
export class CustomerAddressDTO extends BaseClass {
  @FilterableField(() => ID)
  customer: Customer;
}
