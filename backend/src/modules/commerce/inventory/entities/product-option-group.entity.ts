import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, OneToMany } from 'typeorm';
import { FilterableField, FilterableOffsetConnection } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { ProductOption, ProductOptionDTO } from './product-option.entity';
import { genXToManyOptions } from '../../../core/database/helpers/genXToManyOptions';
import { Product } from './product.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    sku: string;
    
    @FilterableField()
    @Column()
    name: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableOffsetConnection('products', () => Product, { nullable: true, update: { enabled: true } })
@FilterableOffsetConnection('options', () => ProductOption, { nullable: true, update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_product_option_groups` })
export class ProductOptionGroup extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Product, item => item.optionGroups)
  products: Product[]

  @OneToMany(() => ProductOption, item => item.group, genXToManyOptions({ nullable: true }))
  options: ProductOption[];

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
export class ProductOptionGroupDTO extends BaseClass {
  @FilterableField(() => [ProductOptionDTO], { nullable: true })
  options: ProductOption[];
  
  @FilterableField(() => [ID], { nullable: true })
  products: Product[];
}
