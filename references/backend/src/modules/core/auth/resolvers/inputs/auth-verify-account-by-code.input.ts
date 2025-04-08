import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthVerifyAccountByCodeInput {
    @Field()
    email: string

    @Field()
    code: string
}