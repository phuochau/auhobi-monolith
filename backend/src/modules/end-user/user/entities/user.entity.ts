import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../../constants';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { UserStatus } from './enums/user-status.enum';
import { Account } from 'src/modules/core/auth/entities/account.entity';
import { genXToOneOptions } from 'src/modules/core/database/helpers/genXToOneOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column({ nullable: true })
  phone_number: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar: string;

  @FilterableField(() => UserStatus)
  @Column({ nullable: false, default: UserStatus.ACTIVATED })
  status: UserStatus;
}


/**
 * Entity
 */
@ObjectType()
@FilterableRelation('account', () => Account)
@Entity({ name: `${TABLE_PREFIX}_users` })
export class User extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account, genXToOneOptions())
  account?: Account;

  @FilterableField()
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @FilterableField({ nullable: true })
  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;

  @FilterableField({ nullable: true })
  @DeleteDateColumn({ type: "timestamptz", onUpdate: "CURRENT_TIMESTAMP(6)" })
  deleted_at?: Date;
}

/**
 * DTO
 */
@InputType()
export class UserDTO extends BaseClass {
  @FilterableField(() => ID)
  account: Account
}