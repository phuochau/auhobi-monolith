import { Query, Resolver } from "@nestjs/graphql";
import { ErrorCodes } from "../enums/error-codes";

@Resolver()
export class EnumsResolver {
  constructor() {
  }

  /**
   * Queries
   */
  @Query(() => ErrorCodes, { name: 'errorCodes' })
  errorCodes() {
    return ErrorCodes
  }
}
