import { HttpService } from "@/lib/http";
import _ from "lodash";
import { print as DocumentNodeToString } from 'graphql/language/printer';
import { DocumentNode } from "graphql";
import { GraphQLResponse } from "./types/graphql-response";
import { ErrorCodes, File } from "./gql/generated-models";
import { store } from "@/store/store";
import { Platform } from "react-native";
import { signOutAction } from "@/store/user/actions/sign-out.action";

class GraphQLClient {
    // instance = new HttpService(process.env.EXPO_PUBLIC_GRAPHQL_URL!)
    instance = new HttpService("http://192.168.1.5:3001/graphql")
    restInstance = new HttpService(process.env.EXPO_PUBLIC_REST_URL!)
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
                store.dispatch(signOutAction())
                // const refreshResult = await AuthService.refreshToken()
                // if (refreshResult?.success) {
                //     return authQuery<T, P>(query, variables)
                // }
            }

            return gqlResponse
        })
    }

    uploadMedia = async (fileName: string, filePath: string, mimetype: string): Promise<File> => {
        const formData = new FormData();

        formData.append('file', {
            uri: Platform.OS === 'android' ? filePath : filePath.replace('file://', ''),
            type: mimetype,
            name: fileName,
        } as unknown as Blob);

        return this.restInstance.put<File>({
            uri: 'upload/addMedia',
            data: formData,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Content-Type': 'multipart/form-data'
            },
            transformRequest: () => {
                return formData;
            }
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