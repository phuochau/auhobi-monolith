import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthConfirmPasswordResetByCodeInput {
    @Field()
    email: string
    
    @Field()
    code: string

    @Field()
    password: string
}