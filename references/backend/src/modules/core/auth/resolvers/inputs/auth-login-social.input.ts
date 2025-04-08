import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthLoginSocialInput {
    @Field()
    userId: string;
    
    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;

    @Field({ nullable: true })
    photo?: string;

}