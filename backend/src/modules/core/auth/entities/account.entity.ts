import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, BaseEntity, OneToOne } from 'typeorm';
import { FilterableField, FilterableRelation, QueryOptions } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { AccountRole } from './enums/account-role.enum';
import { User, UserDTO } from '../../../end-user/entities/user.entity';
import { genXToOneOptions } from '../../database/helpers/genXToOneOptions';
import { AccountAuthMethod } from './enums/account-auth-method.enum';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField(() => AccountAuthMethod)
    @Column('int', { default: [AccountAuthMethod.EMAIL], array: true })
    authMethods: AccountAuthMethod[];


    @FilterableField({ nullable: true })
    @Column({ unique: true, nullable: true })
    email?: string;

    @Column({ nullable: true })
    password?: string;

    @FilterableField(() => AccountRole)
    @Column('int', { default: AccountRole.USER })
    role: AccountRole;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    firstName?: string;
  
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    lastName?: string;
    
    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    phoneNumber: string;

    /**
     * Social
     */
    @FilterableField({ nullable: true })
    @Column({ unique: true, nullable: true })
    appleUserId?: string;

    @FilterableField({ nullable: true })
    @Column({ unique: true, nullable: true })
    facebookUserId?: string;

    @FilterableField({ nullable: true })
    @Column({ unique: true, nullable: true })
    googleUserId?: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('user', () => User, { update: { enabled: true }})
@QueryOptions({ filterDepth: 3 })
@Entity({ name: `${TABLE_PREFIX}_accounts` })
export class Account extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @FilterableField()
  @Column({ default: false })
  isActivated: boolean;

  @FilterableField()
  @Column({ default: false })
  emailVerified: boolean;

  @FilterableField()
  @Column({ default: false })
  phoneVerified: boolean;

  @OneToOne(() => User, member => member.account, genXToOneOptions({ nullable: true }))
  user?: User;

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
  @FilterableField(() => UserDTO)
  user: User;
}
