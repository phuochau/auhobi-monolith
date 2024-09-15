import { GraphQLAPI } from "@/graphql/api";
import { AuthRegisterInput, MutationAuthRegisterArgs } from "@/graphql/gql/generated-models";
import { AuthRegisterMutation } from "@/graphql/gql/mutations/authRegister";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerAsync = createAsyncThunk<GraphQLResponse<Boolean>, AuthRegisterInput>(
    'user/registerAsync',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.guestQuery<Boolean, MutationAuthRegisterArgs>(AuthRegisterMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)