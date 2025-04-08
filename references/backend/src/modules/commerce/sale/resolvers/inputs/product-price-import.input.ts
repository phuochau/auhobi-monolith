import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class ProductPriceImportInput {
    @Field(() => ID)
    branchId: string;

    @Field(() => ID)
    fileId: string;
}