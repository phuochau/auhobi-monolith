import { GraphQLAPI } from "@/graphql/api";
import { QueryVehicleBrandsArgs, VehicleBrandConnection } from "@/graphql/gql/generated-models";
import { VehicleBrandsQuery } from "@/graphql/gql/queries/vehicleBrands";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVehicleBrandsAction = createAsyncThunk<GraphQLResponse<VehicleBrandConnection>, QueryVehicleBrandsArgs>(
    'vehicle/fetchVehicleBrands',
    async (input, thunkApi) => {
        try {
            return GraphQLAPI.authQuery<VehicleBrandConnection, QueryVehicleBrandsArgs>(VehicleBrandsQuery, input)
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)