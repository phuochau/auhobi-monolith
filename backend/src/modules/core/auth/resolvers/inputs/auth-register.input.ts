import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthRegisterInput {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ defaultValue: false })
    useCode: boolean;
}