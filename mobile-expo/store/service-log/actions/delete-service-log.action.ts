import { GraphQLAPI } from "@/graphql/api";
import { MutationDeleteOneServiceLogArgs, ServiceLogDeleteResponse } from "@/graphql/gql/generated-models";
import { DeleteOneServiceLogMutation } from "@/graphql/gql/mutations/deleteOneServiceLog";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteServiceLogAction = createAsyncThunk<GraphQLResponse<ServiceLogDeleteResponse>, MutationDeleteOneServiceLogArgs>(
    'service-log/deleteServiceLog',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<ServiceLogDeleteResponse, MutationDeleteOneServiceLogArgs>(DeleteOneServiceLogMutation, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)