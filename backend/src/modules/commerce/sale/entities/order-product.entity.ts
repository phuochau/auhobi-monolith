import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne, Column } from 'typeorm';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { genXToOneOptions } from '../../../core/database/helpers/genXToOneOptions';
import { Product, ProductDTO } from '../../inventory/entities/product.entity';
import { Order } from './order.entity';
import { ProductOption, ProductOptionDTO } from '../../inventory/entities/product-option.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column({ default: 1 })
  quantity: number;

  @FilterableField({ nullable: true })
  @Column({ nullable: true })
  grossPrice: number;

  @FilterableField({ nullable: true })
  @Column({ nullable: true, default: 0 })
  discountPrice: number;

  @FilterableField()
  @Column()
  netPrice: number;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('product', () => Product, { update: { enabled: true }})
@FilterableOffsetConnection('options', () => ProductOption, { update: { enabled: true } })
@FilterableRelation('order', () => Order)
@Entity({ name: `${TABLE_PREFIX}_order_products` })
export class OrderProduct extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Order)
  order?: Order

  @ManyToOne(() => Product, genXToOneOptions())
  product: Product

  @ManyToOne(() => ProductOption, genXToOneOptions())
  options: ProductOption[]

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
export class OrderProductDTO extends BaseClass {
    @FilterableField(() => ID)
    order: Order;

    @FilterableField(() => ProductDTO)
    product: Product;

    @FilterableField(() => [ProductOptionDTO])
    options: ProductOption[];
}
