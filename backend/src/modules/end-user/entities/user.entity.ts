import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_PREFIX } from '../constants';
import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { UserStatus } from './enums/user-status.enum';
import { Account } from '../../core/auth/entities/account.entity';
import { UserVehicle } from './user-vehicle.entity';
import { genXToManyOptions } from '../../core/database/helpers/genXToManyOptions';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField({ nullable: true })
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
@FilterableOffsetConnection('vehicles', () => UserVehicle, { nullable: true, update: { enabled: true } })
@Entity({ name: `${TABLE_PREFIX}_users` })
export class User extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account)
  account: Account;

  @OneToMany(() => UserVehicle, (p) => p.owner, genXToManyOptions({ nullable: true }))
  vehicles: UserVehicle[]

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
export class UserDTO extends BaseClass {
  @FilterableField(() => ID)
  account: Account
}