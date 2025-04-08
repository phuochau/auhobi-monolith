import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, BaseEntity } from 'typeorm';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField()
    @Column()
    name: string;

    @Field()
    @Column({ unique: true })
    @Index()
    key: string;

    @Field()
    @Column()
    secret: string;
}

/**
 * Entity
 */
@ObjectType()
@Entity({ name: `${TABLE_PREFIX}_api_keys` })
export class ApiKey extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @FilterableField()
  @Column({ default: false })
  expired: boolean;

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
export class ApiKeyDTO extends BaseClass {
}
