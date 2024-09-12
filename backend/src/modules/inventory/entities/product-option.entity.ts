import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { ProductOptionGroup } from './product-option-group.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    sku: string;
    
    @FilterableField()
    @Column()
    name: string;
    
    @FilterableField()
    @Column()
    diffPrice: number;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('group', () => ProductOptionGroup)
@Entity({ name: `${TABLE_PREFIX}_product_options` })
export class ProductOption extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @ManyToOne(() => ProductOptionGroup, group => group.options)
  group?: ProductOptionGroup;

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
export class ProductOptionDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  group: ProductOptionGroup;
}
