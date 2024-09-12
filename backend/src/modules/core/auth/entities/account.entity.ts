import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, BaseEntity } from 'typeorm';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { AccountRole } from './enums/account-role.enum';

registerEnumType(AccountRole, {
  name: 'AccountRole',
});

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField()
    @Column({ unique: true })
    @Index()
    email: string;

    @Column()
    password: string;

    @FilterableField(() => AccountRole)
    @Column('int', { default: AccountRole.USER })
    role: AccountRole;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    firstName: string;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    lastName: string;
}

/**
 * Entity
 */
@ObjectType()
@Entity({ name: `${TABLE_PREFIX}_accounts` })
export class Account extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @FilterableField()
  @Column({ default: false })
  emailVerified: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @CreateDateColumn({ type: "timestamptz", nullable: true })
  refreshTokenExpiredAt?: Date;

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
export class AccountDTO extends BaseClass {
}
