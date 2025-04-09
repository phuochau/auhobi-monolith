import { GraphQLAPI } from "@/graphql/api";
import { QueryServiceLogArgs, ServiceLog } from "@/graphql/gql/generated-models";
import { ServiceLogQuery } from "@/graphql/gql/queries/serviceLog";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getServiceLog = createAsyncThunk<GraphQLResponse<ServiceLog>, QueryServiceLogArgs>(
    'service-log/get',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<ServiceLog, QueryServiceLogArgs>(ServiceLogQuery, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)