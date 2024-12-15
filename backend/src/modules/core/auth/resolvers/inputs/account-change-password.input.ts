import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AccountChangePasswordInput {
    @Field()
    oldPassword: string

    @Field()
    newPassword: string
}