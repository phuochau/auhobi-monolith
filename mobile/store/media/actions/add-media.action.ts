import { GraphQLAPI } from "@/graphql/api"
import { File } from "@/graphql/gql/generated-models"
import { createAsyncThunk } from "@reduxjs/toolkit"

export type AddMediaInput = {
    fileName: string,
    filePath: string,
    mimeType: string
}

export const addMedia = createAsyncThunk<File, AddMediaInput>(
    'media/addMedia',
    async (file, thunkApi) => {
        try {
            const res = await GraphQLAPI.uploadMedia(file.fileName, file.filePath, file.mimeType)
            return res
        } catch (err: any) { 
            return thunkApi.rejectWithValue(err.message)
        }
    }
)