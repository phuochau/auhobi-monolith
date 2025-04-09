import { GraphQLAPI } from "@/graphql/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signOutAction = createAsyncThunk<boolean, void>(
    'user/signOut',
    async (input, thunkApi) => {
        try {
            GraphQLAPI.clearTokens()
            return true
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)