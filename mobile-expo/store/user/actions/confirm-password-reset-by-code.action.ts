import { GraphQLAPI } from "@/graphql/api";
import { AuthConfirmPasswordResetByCodeInput, MutationAuthConfirmPasswordResetByCodeArgs } from "@/graphql/gql/generated-models";
import { AuthConfirmPasswordResetByCodeMutation } from "@/graphql/gql/mutations/authConfirmPasswordResetByCode";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const confirmPasswordResetByCodeAction = createAsyncThunk<GraphQLResponse<Boolean>, AuthConfirmPasswordResetByCodeInput>(
    'user/confirmPasswordResetByCode',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<Boolean, MutationAuthConfirmPasswordResetByCodeArgs>(AuthConfirmPasswordResetByCodeMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)