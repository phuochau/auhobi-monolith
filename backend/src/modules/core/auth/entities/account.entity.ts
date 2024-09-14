import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, BaseEntity, OneToOne } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { AccountRole } from './enums/account-role.enum';
import { User, UserDTO } from '../../../end-user/entities/user.entity';
import { genXToOneOptions } from '../../database/helpers/genXToOneOptions';

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
@FilterableRelation('user', () => User, { update: { enabled: true }})
@Entity({ name: `${TABLE_PREFIX}_accounts` })
export class Account extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @FilterableField()
  @Column({ default: false })
  emailVerified: boolean;

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
