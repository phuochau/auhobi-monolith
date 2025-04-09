import { GraphQLAPI } from "@/graphql/api";
import { QueryVehicleBaseModelsArgs, VehicleBaseModelConnection } from "@/graphql/gql/generated-models";
import { VehicleBaseModelsQuery } from "@/graphql/gql/queries/vehicleBaseModels";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVehicleBaseModelsAction = createAsyncThunk<GraphQLResponse<VehicleBaseModelConnection>, QueryVehicleBaseModelsArgs>(
    'vehicle/fetchVehicleBaseModels',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<VehicleBaseModelConnection, QueryVehicleBaseModelsArgs>(VehicleBaseModelsQuery, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)