import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { OrgBranch } from '../../organization/entities/org-branch.entity';
import { Product } from './product.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';

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
@FilterableRelation('branch', () => OrgBranch)
@FilterableOffsetConnection('products', () => Product, { nullable: true, update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_product_types` })
export class ProductType extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgBranch, genXToOneOptions())
  branch: OrgBranch

  @OneToMany(() => Product, item => item.type)
  products: Product[];

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
export class ProductTypeDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  branch: OrgBranch;
  
  @FilterableField(() => [ID], { nullable: true })
  products: Product[];
}
