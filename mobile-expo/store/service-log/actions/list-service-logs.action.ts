import { GraphQLAPI } from "@/graphql/api";
import { QueryServiceLogsArgs, ServiceLogConnection, ServiceLogSortFields, SortDirection } from "@/graphql/gql/generated-models";
import { ServiceLogsQuery } from "@/graphql/gql/queries/serviceLogs";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { RootState } from "@/store/store";
import { selectCurrentVehicle } from "@/store/user/user.selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listServiceLog = createAsyncThunk<GraphQLResponse<ServiceLogConnection>>(
    'service-log/list',
    async (input, thunkApi) => {
        try {
            const rootState = thunkApi.getState() as RootState
            
            const params = {
                paging: { first: 500 },
                sorting: [{ field: ServiceLogSortFields.CreatedAt, direction: SortDirection.Desc }],
                filter: {
                    vehicle: {
                        id: { eq: selectCurrentVehicle(rootState!)?.id }
                    }
                }
            }
            return GraphQLAPI.authQuery<ServiceLogConnection, QueryServiceLogsArgs>(ServiceLogsQuery, params)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)