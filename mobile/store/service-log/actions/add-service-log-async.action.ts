import { GraphQLAPI } from "@/graphql/api";
import { CreateOneServiceLogInput, MutationCreateOneServiceLogArgs, ServiceLog } from "@/graphql/gql/generated-models";
import { CreateOneServiceLogMutation } from "@/graphql/gql/mutations/createOneServiceLog";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addServiceLogAsync = createAsyncThunk<GraphQLResponse<ServiceLog>, CreateOneServiceLogInput>(
    'user/addServiceLogAsync',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.authQuery<ServiceLog, MutationCreateOneServiceLogArgs>(CreateOneServiceLogMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)