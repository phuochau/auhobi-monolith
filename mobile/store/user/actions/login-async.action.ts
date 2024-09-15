import { GraphQLAPI } from "@/graphql/api";
import { AuthLoginInput, LoginResult, MutationAuthLoginArgs } from "@/graphql/gql/generated-models";
import { AuthLoginMutation } from "@/graphql/gql/mutations/authLogin";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk<GraphQLResponse<LoginResult>, AuthLoginInput>(
    'user/loginAsync',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<LoginResult, MutationAuthLoginArgs>(AuthLoginMutation, { input })
            if (res.data) {
                GraphQLAPI.setTokens(res.data.accessToken, res.data.refreshToken)
            }
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)