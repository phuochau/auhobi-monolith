import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { BeforeCreateOne, CreateOneInputType, FilterableField, FilterableRelation } from '@ptc-org/nestjs-query-graphql';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../../constants';
import { genXToOneOptions } from '../../database/helpers/genXToOneOptions';
import { Account } from '../../auth/entities/account.entity';
import { GqlContext } from '../../graphql/types/gql-context';

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField()
    @Column()
    name: string;

    @FilterableField()
    @Column()
    mimetype: string;

    @FilterableField({ nullable: true })
    @Column({ nullable: true })
    refId: string;

    @Field()
    @Column()
    url: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    secureUrl: string;
}

/**
 * Entity
 */
@ObjectType()
@FilterableRelation('createdBy', () => Account)
@Entity({ name: `${TABLE_PREFIX}_media` })
export class Media extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account, genXToOneOptions())
  createdBy: Account

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
@BeforeCreateOne((input: CreateOneInputType<MediaDTO>, context: GqlContext) => {
  input.input.createdBy = context.req.user
  return input;
})
export class MediaDTO extends BaseClass {
  @FilterableField(() => ID, { nullable: true })
  createdBy: Account;
}
