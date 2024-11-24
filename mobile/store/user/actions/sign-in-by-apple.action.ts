import { GraphQLAPI } from "@/graphql/api";
import { AuthLoginSocialInput, LoginResult, MutationAuthLoginByAppleArgs } from "@/graphql/gql/generated-models";
import { AuthLoginByAppleMutation } from "@/graphql/gql/mutations/authLoginByApple";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInByAppleAction = createAsyncThunk<GraphQLResponse<LoginResult>, AuthLoginSocialInput>(
    'user/signInByApple',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<LoginResult, MutationAuthLoginByAppleArgs>(AuthLoginByAppleMutation, { input })
            if (res.data) {
                GraphQLAPI.setTokens(res.data.accessToken, res.data.refreshToken)
            }
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)