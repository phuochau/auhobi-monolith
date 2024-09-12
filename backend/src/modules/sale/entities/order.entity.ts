import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { OrgBranch } from '../../organization/entities/org-branch.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { BranchSaleChannel } from './branch-sale-channel.entity';
import { genXToManyOptions } from '../../core/database/helpers/genXToManyOptions';
import { OrderProduct, OrderProductDTO } from './order-product.entity';
import { Customer } from '../../crm/entities/customer.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    refId: string;

    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    grossPrice: number;

    @FilterableField({ nullable: true })
    @Column({ nullable: true, default: 0 })
    discountPrice: number;

    @FilterableField({ nullable: true })
    @Column({ nullable: true, default: 0 })
    commissionPercent: number;

    @FilterableField({ nullable: true })
    @Column({ nullable: true, default: 0 })
    commissionPrice: number;

    @FilterableField()
    @Column()
    netPrice: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    note: string;

    @Field({ nullable: true })
    @Column('decimal', { nullable: true })
    shippingAddressDistanceKm: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    shippingAddressDistrict: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    shippingAddressCity: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    shippingAddressWard: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    shippingAddressFull: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('branch', () => OrgBranch)
@FilterableRelation('customer', () => Customer)
@FilterableRelation('saleChannel', () => BranchSaleChannel)
@Entity({ name: `${TABLE_PREFIX}_orders` })
export class Order extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgBranch, genXToOneOptions())
  branch: OrgBranch

  @ManyToOne(() => BranchSaleChannel, genXToOneOptions())
  saleChannel: BranchSaleChannel

  @ManyToOne(() => Customer, genXToOneOptions())
  customer: Customer

  @OneToMany(() => OrderProduct, item => item.order, genXToManyOptions())
  products: OrderProduct[];

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
export class OrderDTO extends BaseClass {
    @FilterableField(() => ID)
    branch: OrgBranch;

    @FilterableField(() => ID)
    customer: Customer;

    @FilterableField(() => ID)
    saleChannel: BranchSaleChannel;

    @FilterableField(() => [OrderProductDTO], { nullable: true })
    products: OrderProduct[];
}
