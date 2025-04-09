import { GraphQLAPI } from "@/graphql/api";
import { QueryVehicleBodiesArgs, VehicleBodyConnection } from "@/graphql/gql/generated-models";
import { VehicleBodiesQuery } from "@/graphql/gql/queries/vehicleBodies";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVehicleBodiesAction = createAsyncThunk<GraphQLResponse<VehicleBodyConnection>, QueryVehicleBodiesArgs>(
    'vehicle/fetchVehicleBodies',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<VehicleBodyConnection, QueryVehicleBodiesArgs>(VehicleBodiesQuery, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)