import { GraphQLAPI } from "@/graphql/api";
import { AuthRequestPasswordResetInput, MutationAuthRequestPasswordResetArgs } from "@/graphql/gql/generated-models";
import { AuthRequestPasswordResetMutation } from "@/graphql/gql/mutations/authRequestPasswordReset";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestPasswordResetAction = createAsyncThunk<GraphQLResponse<Boolean>, AuthRequestPasswordResetInput>(
    'user/requestPasswordReset',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<Boolean, MutationAuthRequestPasswordResetArgs>(AuthRequestPasswordResetMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)