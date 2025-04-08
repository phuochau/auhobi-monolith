import { Field, ObjectType } from "@nestjs/graphql";
import { Account } from "../account.entity";

@ObjectType()
export class LoginResult {
    @Field()
    account: Account

    @Field()
    accessToken: string

    @Field()
    refreshToken: string
}