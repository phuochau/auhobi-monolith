import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthLoginFacebookInput {
    @Field()
    userID: string;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;

    @Field({ nullable: true })
    imageUrl?: string;

}