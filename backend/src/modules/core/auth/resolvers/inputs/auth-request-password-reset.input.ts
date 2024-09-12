import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthRequestPasswordResetInput {
    @Field()
    email: string
}