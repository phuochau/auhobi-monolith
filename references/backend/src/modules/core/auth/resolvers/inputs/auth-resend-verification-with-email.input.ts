import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthResendVerificationWithEmailInput {
    @Field()
    email: string

    @Field({ defaultValue: false })
    useCode: boolean;
}