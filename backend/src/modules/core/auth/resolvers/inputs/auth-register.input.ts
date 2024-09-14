import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthRegisterInput {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field({ nullable: true })
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ nullable: true, defaultValue: false })
    useCode: boolean;

    @Field({ nullable: true, defaultValue: false })
    createUser: boolean;
}