import { GraphQLResponse } from "@/graphql/types/graphql-response"
import _ from "lodash"

export namespace ErrorUtils {
  export const getGraphQLErrorString = (res: GraphQLResponse<any>): string | undefined => {
      return _.get(res, 'errors[0].message')
  }

  export const getErrorMessage = (error: any, fallbackMessage = 'There was an internal error. Please try again.'): string => {
    if (!error) {
      return fallbackMessage
    }
    if (typeof error === 'string') {
      return error
    }

    if (error?.message?.length) {
      return _.get(error, 'message', fallbackMessage)
    }

    if (Array.isArray(error) && error.length) {
      return getErrorMessage(error[0], fallbackMessage)
    }

    return fallbackMessage
  }
}