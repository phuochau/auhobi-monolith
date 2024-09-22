import { HttpService } from "@/lib/http";
import _ from "lodash";
import { print as DocumentNodeToString } from 'graphql/language/printer';
import { DocumentNode } from "graphql";
import { GraphQLResponse } from "./types/graphql-response";
import { ErrorCodes } from "./gql/generated-models";
import { store } from "@/store/store";
import { logout } from "@/store/user/user.slice";

class GraphQLClient {
    instance = new HttpService(process.env.EXPO_PUBLIC_GRAPHQL_URL!)
    accessToken: string | undefined;
    refreshToken: string  | undefined;

    setTokens(accessToken: string, refreshToken: string) {
        this.accessToken = accessToken
        this.refreshToken = refreshToken
    }

    clearTokens() {
        this.accessToken = undefined
        this.refreshToken = undefined
    }

    query = async <T, P>(requiredAuth: boolean, query: DocumentNode, variables?: P): Promise<GraphQLResponse<T>> => {
        if (requiredAuth) {
            return this.authQuery<T, P>(query, variables)
        }

        return this.guestQuery<T, P>(query, variables)
    }

    guestQuery = async <T, P>(query: DocumentNode, variables?: P): Promise<GraphQLResponse<T>> => {
        return this.instance.post<T>({
            uri: '',
            data: {
                query: DocumentNodeToString(query),
                variables
            }
        }).then((res: any) => this.parseError(res))
    }

    authQuery = async <T, P>(query: DocumentNode, variables?: P): Promise<GraphQLResponse<T>> => {
        return this.instance.post<any>({
            uri: '',
            data: {
                query: DocumentNodeToString(query),
                variables
            },
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        .then((res: any) => this.parseError<T>(res))
        .then(async (gqlResponse) => {
            const forbidden = this.isForbidden(gqlResponse)
            
            if (forbidden) {
                store.dispatch(logout())
                // const refreshResult = await AuthService.refreshToken()
                // if (refreshResult?.success) {
                //     return authQuery<T, P>(query, variables)
                // }
            }

            return gqlResponse
        })
    }

    parseError = <T>(resData: any): GraphQLResponse<T> => {
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

    isForbidden = <T>(response: GraphQLResponse<T>): boolean => {
        if (response?.errors?.length) {
            const codes = response.errors.map(item => item.message)
            if (codes.includes(ErrorCodes.AuthForbidden)) {
                return true
            }
        }

        return false
    }

    getErrorString = (res: GraphQLResponse<any>): string | undefined => {
        return _.get(res, 'errors[0].message')
    }
}

export const GraphQLAPI = new GraphQLClient()