import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthResendVerificationWithEmailInput {
    @Field()
    email: string
}