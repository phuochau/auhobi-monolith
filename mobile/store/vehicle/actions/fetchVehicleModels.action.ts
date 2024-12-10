import { GraphQLAPI } from "@/graphql/api";
import { QueryVehicleModelsArgs, VehicleModelConnection } from "@/graphql/gql/generated-models";
import { VehicleModelsQuery } from "@/graphql/gql/queries/vehicleModels";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVehicleModelsAction = createAsyncThunk<GraphQLResponse<VehicleModelConnection>, QueryVehicleModelsArgs>(
    'vehicle/fetchVehicleModels',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<VehicleModelConnection, QueryVehicleModelsArgs>(VehicleModelsQuery, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)