import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthRefreshTokenInput {
    @Field()
    accountId: string;

    @Field()
    refreshToken: string;
}