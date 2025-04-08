import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { OrgBranch } from '../../../organization/entities/org-branch.entity';
import { genXToOneOptions } from '../../../core/database/helpers/genXToOneOptions';
import { ProductType } from './product-type.entity';
import { ProductCategory } from './product-category.entity';
import { genXToManyOptions } from '../../../core/database/helpers/genXToManyOptions';
import { ProductUnit } from './product-unit.entity';
import { ProductOptionGroup } from './product-option-group.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    sku: string;
    
    @Field({ nullable: true })
    @Column({ nullable: true })
    image: string;
    
    @FilterableField()
    @Column()
    name: string;
    
    @FilterableField()
    @Column('decimal')
    price: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    description: string;

    @FilterableField({ nullable: true })
    @Column({ default: true })
    enabled: boolean;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('branch', () => OrgBranch)
@FilterableOffsetConnection('categories', () => ProductCategory)
@FilterableOffsetConnection('optionGroups', () => ProductOptionGroup, { update: { enabled: true }})
@FilterableRelation('type', () => ProductType)
@FilterableRelation('unit', () => ProductUnit, { update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_products` })
export class Product extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgBranch, genXToOneOptions())
  branch: OrgBranch

  @ManyToMany(() => ProductCategory, genXToManyOptions())
  @JoinTable()
  categories: ProductCategory[]

  @ManyToMany(() => ProductOptionGroup, genXToManyOptions())
  @JoinTable()
  optionGroups: ProductOptionGroup[]

  @ManyToOne(() => ProductType, genXToOneOptions())
  type: ProductType

  @ManyToOne(() => ProductUnit, genXToOneOptions())
  unit: ProductUnit

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
export class ProductDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  branch: OrgBranch;

  @FilterableField(() => [ID], { nullable: true })
  categories: ProductCategory[];

  @FilterableField(() => ID, { nullable: true })
  type: ProductType;

  @FilterableField(() => ID, { nullable: true })
  unit: ProductUnit;
}
