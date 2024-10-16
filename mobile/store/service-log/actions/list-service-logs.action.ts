import { GraphQLAPI } from "@/graphql/api";
import { QueryServiceLogsArgs, ServiceLogConnection } from "@/graphql/gql/generated-models";
import { ServiceLogsQuery } from "@/graphql/gql/queries/serviceLogs";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listServiceLog = createAsyncThunk<GraphQLResponse<ServiceLogConnection>, QueryServiceLogsArgs>(
    'service-log/list',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<ServiceLogConnection, QueryServiceLogsArgs>(ServiceLogsQuery, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)