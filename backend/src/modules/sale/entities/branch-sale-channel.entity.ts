import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { OrgBranch } from '../../organization/entities/org-branch.entity';
import { genXToOneOptions } from '../../core/database/helpers/genXToOneOptions';
import GraphQLJSON from 'graphql-type-json';
import { SaleChannel } from './enums/sale-channel';

registerEnumType(SaleChannel, {
  name: 'SaleChannel',
});

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @Field({ nullable: true })
    @Column({ nullable: true, default: 0 })
    commission: number;
  
    @Field(() => GraphQLJSON, { nullable: true })
    @Column({ type: 'jsonb', nullable: true })
    details: string;

    @FilterableField(() => SaleChannel)
    @Column('int')
    saleChannel: SaleChannel;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('branch', () => OrgBranch)
@Entity({ name: `${TABLE_PREFIX}_branch_sale_channels` })
export class BranchSaleChannel extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => OrgBranch, genXToOneOptions())
  branch: OrgBranch

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
export class BranchSaleChannelDTO extends BaseClass {
    @FilterableField(() => ID)
    branch: OrgBranch;
}
