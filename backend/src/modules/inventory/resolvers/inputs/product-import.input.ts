import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class ProductImportInput {
    @Field(() => ID)
    branchId: string;

    @Field(() => ID)
    fileId: string;
}