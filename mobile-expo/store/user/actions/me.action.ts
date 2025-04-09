import { GraphQLAPI } from "@/graphql/api";
import { Account } from "@/graphql/gql/generated-models";
import { MeQuery } from "@/graphql/gql/queries/me";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const meAction = createAsyncThunk<GraphQLResponse<Account>>(
    'user/me',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.authQuery<Account, any>(MeQuery)
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)