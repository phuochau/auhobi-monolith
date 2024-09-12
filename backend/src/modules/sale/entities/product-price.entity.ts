import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne, Unique } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import { BranchSaleChannel } from './branch-sale-channel.entity';
import { Product } from '../../inventory/entities/product.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField()
    @Column('decimal')
    price: number;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('branchSaleChannel', () => BranchSaleChannel)
@FilterableRelation('product', () => Product)
@Entity({ name: `${TABLE_PREFIX}_product_prices` })
@Unique(['branchSaleChannel', 'product', 'price'])
export class ProductPrice extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => BranchSaleChannel, genXToOneOptions())
  branchSaleChannel: BranchSaleChannel

  @ManyToOne(() => Product, genXToOneOptions())
  product: Product

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
export class ProductPriceDTO extends BaseClass {
    @FilterableField(() => ID)
    branchSaleChannel: BranchSaleChannel;

    @FilterableField(() => ID)
    product: Product;
}
