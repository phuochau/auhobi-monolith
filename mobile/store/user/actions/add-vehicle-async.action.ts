import { GraphQLAPI } from "@/graphql/api";
import { CreateOneUserVehicleInput, MutationCreateOneUserVehicleArgs, UserVehicle } from "@/graphql/gql/generated-models";
import { CreateOneUserVehicleMutation } from "@/graphql/gql/mutations/createOneUserVehicle";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addVehicleAsync = createAsyncThunk<GraphQLResponse<UserVehicle>, CreateOneUserVehicleInput>(
    'user/addVehicleAsync',
    async (input, thunkApi) => {
        try {
            const res = await GraphQLAPI.authQuery<UserVehicle, MutationCreateOneUserVehicleArgs>(CreateOneUserVehicleMutation, { input })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)