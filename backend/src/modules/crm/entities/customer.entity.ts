import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, BaseEntity, OneToMany } from 'typeorm';
import { FilterableField, FilterableOffsetConnection } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { CustomerGender } from './enums/customer-gender.enum';
import { CustomerAddress, CustomerAddressDTO } from './customer-address.entity';
import { genXToManyOptions } from '../../core/database/helpers/genXToManyOptions';

registerEnumType(CustomerGender, {
  name: 'CustomerGender',
});

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField()
    @Column({ unique: true })
    @Index()
    phone: string;

    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    email: string;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    firstName: string;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    lastName: string;

    @FilterableField(() => CustomerGender)
    @Column('int', { default: CustomerGender.UNKNOWN })
    gender: CustomerGender;
}

/**
 * Entity
 */
@ObjectType()
@FilterableOffsetConnection('addresses', () => CustomerAddress, { nullable: true, update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_customers` })
export class Customer extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => CustomerAddress, item => item.customer, genXToManyOptions({ nullable: true }))
  addresses: CustomerAddress[];

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
export class CustomerDTO extends BaseClass {
  @FilterableField(() => [CustomerAddressDTO], { nullable: true })
  OneToMany: CustomerAddress[];
}
