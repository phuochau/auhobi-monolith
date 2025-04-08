import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthRequestPasswordResetInput {
    @Field()
    email: string

    @Field({ nullable: true, defaultValue: false })
    useCode: boolean;
}