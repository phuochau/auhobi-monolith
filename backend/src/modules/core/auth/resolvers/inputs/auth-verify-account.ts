import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthVerifyAccountInput {
    @Field()
    token: string
}