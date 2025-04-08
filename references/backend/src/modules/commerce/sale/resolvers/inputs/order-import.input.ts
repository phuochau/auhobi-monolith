import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class OrderImportInput {
    @Field(() => ID)
    branchId: string;

    @Field(() => ID)
    branchSaleChannelId: string;

    @Field(() => [ID])
    fileOrMediaIds: string[];
}