import { GraphQLAPI } from "@/graphql/api";
import { AuthResendVerificationWithEmailInput, MutationAuthResendVerificationWithEmailArgs } from "@/graphql/gql/generated-models";
import { AuthResendVerificationWithEmailMutation } from "@/graphql/gql/mutations/authResendVerificationWithEmail";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const resendVerificationWithEmailAction = createAsyncThunk<GraphQLResponse<Boolean>, AuthResendVerificationWithEmailInput>(
    'user/resendVerificationWithEmail',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<Boolean, MutationAuthResendVerificationWithEmailArgs>(AuthResendVerificationWithEmailMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)