import { GraphQLAPI } from "@/graphql/api";
import { LoginResult, Mutation, MutationAuthLoginArgs, MutationAuthRefreshTokenArgs, Query, QueryOrgsArgs } from "@/graphql/gql/generated-models";
import { AuthLoginMutation } from "@/graphql/gql/mutations/authLogin";
import { AuthRefreshTokenMutation } from "@/graphql/gql/mutations/authRefreshToken";
import { OrgTypesQuery } from "@/graphql/gql/queries/orgTypes";
import { SessionService } from "@/services/session.service";
import { redirect } from "next/navigation";

export namespace AuthService {
    export interface AuthLoginResult {
        success: boolean,
        response: GraphQLAPI.Response<LoginResult>
    }

    export const login = async (email: string, password: string): Promise<AuthLoginResult> => {
        const response = await GraphQLAPI.guestQuery<Mutation['authLogin'], MutationAuthLoginArgs>(AuthLoginMutation, { input: { email, password }})
        
        let success = false
        if (!response.errors && response.data) {
          await SessionService.createSession(response.data.account, response.data.accessToken, response.data.refreshToken)
          await GraphQLAPI.authQuery<Query['orgs'], QueryOrgsArgs>(OrgTypesQuery, {
            paging: { first: 100 },
            filter: {
                members: {
                    and: [
                        
                    ]
                }
            }
          })
          
          success = true
        }

        return {
            success,
            response
        }
    }

    export const refreshToken = async (): Promise<AuthLoginResult> => {
        const session = await SessionService.getSession()
        
        const response = await GraphQLAPI.guestQuery<Mutation['authRefreshToken'], MutationAuthRefreshTokenArgs>(
            AuthRefreshTokenMutation,
            {
                input: {
                    accountId: session.account.id!,
                    refreshToken: session.refreshToken
                }
            }
        )

        let success = false
        if (!response.errors && response.data) {
          await SessionService.refreshSession(response.data.account, response.data.accessToken, response.data.refreshToken)
          success = true
        }

        return {
            success,
            response
        }
    }

    export const logout = async () => {
        await SessionService.destroySession()
        redirect('/login')
    }
}