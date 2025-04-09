import { GraphQLAPI } from "@/graphql/api";
import { AuthVerifyAccountByCodeInput, MutationAuthVerifyByCodeArgs } from "@/graphql/gql/generated-models";
import { AuthVerifyByCodeMutation } from "@/graphql/gql/mutations/authVerifyByCode";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const verifyAccountAction = createAsyncThunk<GraphQLResponse<Boolean>, AuthVerifyAccountByCodeInput>(
    'user/verifyAccount',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<Boolean, MutationAuthVerifyByCodeArgs>(AuthVerifyByCodeMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)