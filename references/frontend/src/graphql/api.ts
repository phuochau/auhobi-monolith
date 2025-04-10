/**
 * This GraphQL API uses to request from nextjs to nestjs backend graphql
 */

import { HttpService } from "@/lib/http";
import { SessionService } from "@/services/session.service";
import _ from "lodash";
import { ErrorCodes } from "./error-codes";
import { AuthService } from "@/services/auth.service";
import { print as DocumentNodeToString } from 'graphql/language/printer';
import { DocumentNode } from "graphql";

export namespace GraphQLAPI {
    const instance = new HttpService(process.env.GRAPHQL_URL)

    export interface Error {
        message: string,
        [key: string]: any
    }

    export interface Response<T> {
        errors?: Error[],
        data?: T
    }

    export const query = async <T, P>(requiredAuth: boolean, query: DocumentNode, variables?: P): Promise<Response<T>> => {
        if (requiredAuth) {
            return authQuery<T, P>(query, variables)
        }

        return guestQuery<T, P>(query, variables)
    }

    export const guestQuery = async <T, P>(query: DocumentNode, variables?: P): Promise<Response<T>> => {
        return instance.post<T>({
            uri: '',
            data: {
                query: DocumentNodeToString(query),
                variables
            }
        }).then((res: any) => parseError(res))
    }

    export const authQuery = async <T, P>(query: DocumentNode, variables?: P): Promise<Response<T>> => {
        const session = await SessionService.getSession()

        console.log('[ACCESS_TOKEN]:', session.accessToken)

        return instance.post<any>({
            uri: '',
            data: {
                query: DocumentNodeToString(query),
                variables
            },
            headers: {
                'Authorization': `Bearer ${session.accessToken}`
            }
        })
        .then((res: any) => parseError<T>(res))
        .then(async (gqlResponse) => {
            const forbidden = isForbidden(gqlResponse)
            
            if (forbidden) {
                const refreshResult = await AuthService.refreshToken()
                if (refreshResult?.success) {
                    return authQuery<T, P>(query, variables)
                }
            }

            return gqlResponse
        })
    }

    const parseError = <T>(resData: any): Response<T> => {
        const errors = _.get(resData, 'errors')
        const data: any = _.get(resData, 'data')

        if (errors) {
            return {
                errors
            }
        }

        if (_.isObject(data) && _.keys(data).length > 0) {
            return {
                data: _.get(data, `[${_.keys(data)[0]}]`)
            }
        }
        return {}
    }

    const isForbidden = <T>(response: Response<T>): boolean => {
        if (response?.errors?.length) {
            const codes = response.errors.map(item => item.message)
            if (codes.includes(ErrorCodes.AUTH_FORBIDDEN)) {
                return true
            }
        }

        return false
    }

    export const getErrorString = (res: Response<any>): string | undefined => {
        return _.get(res, 'errors[0].message')
    }
}