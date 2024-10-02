import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const addMedia = createAsyncThunk<GraphQLResponse<UploadMedia>, AddServiceLogInput>(
    'user/addServiceLog',
    async (values, thunkApi) => {
        try {
            const { vehicle } = values

            let serviceLogInput: ServiceLogDto = {
              date: values.date,
              type: values.type as ServiceLogType,
              mileage: parseInt(values.mileage),
              vehicle: vehicle!.id
            }
            serviceLogInput = await appendGarageDTO(serviceLogInput, values)
            const res = await GraphQLAPI.authQuery<ServiceLog, MutationCreateOneServiceLogArgs>(CreateOneServiceLogMutation, {
                input: {
                    serviceLog: serviceLogInput
                }
            })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)