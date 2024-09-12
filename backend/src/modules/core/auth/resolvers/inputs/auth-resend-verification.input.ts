import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthResendVerificationInput {
    @Field()
    token: string
}