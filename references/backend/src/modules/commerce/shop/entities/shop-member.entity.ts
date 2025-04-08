import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, InputType, ID } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { Account } from '../../../core/auth/entities/account.entity';
import { genXToOneOptions } from '../../../core/database/helpers/genXToOneOptions';
import { ShopMemberRole } from './enums/shop-member-role.enum';
import { Shop } from './shop.entity';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField(() => ShopMemberRole)
  @Column('int', { default: ShopMemberRole.VIEWER })
  role: ShopMemberRole;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('account', () => Account)
@FilterableRelation('shop', () => Shop)
@Entity({ name: `${TABLE_PREFIX}_shop_members` })
export class ShopMember extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @ManyToOne(() => Account,  genXToOneOptions())
  account: Account;

  @ManyToOne(() => Shop, shop => shop.members)
  shop: Shop;

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
export class ShopMemberDTO extends BaseClass {
  @FilterableField(() => ID)
  account: Account;

  @FilterableField(() => ID, { nullable: true })
  shop: Shop;
}
