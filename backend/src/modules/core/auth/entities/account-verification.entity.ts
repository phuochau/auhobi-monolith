import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, BaseEntity, BeforeInsert } from 'typeorm';
import { FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { Account } from './account.entity';
import { genXToOneOptions } from '../../database/helpers/genXToOneOptions';
import { Encryption } from 'src/lib/encryption';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
  @FilterableField()
  @Column()
  token: string;

  @FilterableField()
  @Column()
  code: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('account', () => Account)
@Entity({ name: `${TABLE_PREFIX}_account_verifications` })
export class AccountVerfication extends BaseClass {
  @BeforeInsert()
  updateCode() {
    this.code = Encryption.genDigits(6)
  }
  
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @ManyToOne(() => Account, account => account.id, genXToOneOptions())
  account: Account;

  @FilterableField()
  @Column({ default: false })
  used: boolean;

  @FilterableField()
  @CreateDateColumn({ type: "timestamptz" })
  expiredAt?: Date;

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
export class AccountVerficationDTO extends BaseClass {
  @FilterableField(() => ID)
  account: Account;
}
