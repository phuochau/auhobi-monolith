import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity } from 'typeorm';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { TABLE_PREFIX } from '../constants';
import { ApplicationType } from './enums/application-type.enum';
import GraphQLJSON from 'graphql-type-json';

export interface ApplicationConfig {
  type: ApplicationType,
  auth: {
      verification: {
        tokenExpiredHours: number,
        email: {
            link: string,
            subject: string,
            text: string
        }
      },
      confirmation: {
        email: {
          subject: string,
          text: string
        }
      },
      requestPasswordReset: {
        tokenExpiredHours: number,
        email: {
            link: string,
            subject: string,
            text: string
        }
      },
      passwordResetConfirmation: {
        email: {
          subject: string,
          text: string
        }
      }
  }
}

@ObjectType()
@InputType()
class BaseClass extends BaseEntity {
    @FilterableField()
    @Column()
    name: string;

    @Field()
    @Column('int', { default: ApplicationType.FnB })
    type: ApplicationType
  
    @Field(() => GraphQLJSON, { nullable: true })
    @Column({ type: 'jsonb', nullable: true })
    config: string;
  
}

/**
 * Entity
 */
@ObjectType()
@Entity({ name: `${TABLE_PREFIX}_applications` })
export class Application extends BaseClass {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

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
export class ApplicationDTO extends BaseClass {
}
