import { GraphQLAPI } from "@/graphql/api";
import { AuthLoginSocialInput, LoginResult, MutationAuthLoginByGoogleArgs } from "@/graphql/gql/generated-models";
import { AuthLoginByGoogleMutation } from "@/graphql/gql/mutations/authLoginByGoogle";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInByGoogleAction = createAsyncThunk<GraphQLResponse<LoginResult>, AuthLoginSocialInput>(
    'user/signInByGoogle',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<LoginResult, MutationAuthLoginByGoogleArgs>(AuthLoginByGoogleMutation, { input })
            if (res.data) {
                GraphQLAPI.setTokens(res.data.accessToken, res.data.refreshToken)
            }
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)