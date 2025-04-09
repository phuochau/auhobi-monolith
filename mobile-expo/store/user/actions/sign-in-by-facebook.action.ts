import { GraphQLAPI } from "@/graphql/api";
import { AuthLoginSocialInput, LoginResult, MutationAuthLoginByFacebookArgs } from "@/graphql/gql/generated-models";
import { AuthLoginByFacebookMutation } from "@/graphql/gql/mutations/authLoginByFacebook";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInByFacebookAction = createAsyncThunk<GraphQLResponse<LoginResult>, AuthLoginSocialInput>(
    'user/signInByFacebook',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<LoginResult, MutationAuthLoginByFacebookArgs>(AuthLoginByFacebookMutation, { input })
            if (res.data) {
                GraphQLAPI.setTokens(res.data.accessToken, res.data.refreshToken)
            }
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)