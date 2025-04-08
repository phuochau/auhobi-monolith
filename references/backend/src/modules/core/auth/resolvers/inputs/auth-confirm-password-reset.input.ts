import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthConfirmPasswordResetInput {
    @Field()
    token: string

    @Field()
    password: string
}