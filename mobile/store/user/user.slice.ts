import { createSlice } from '@reduxjs/toolkit'
import { Account, LoginResult } from '@/graphql/gql/generated-models'
import { GraphQLResponseAction } from '../types/graphql-response-payload'
import { loginAsync } from './actions/login-async.action'

// Define a type for the slice state
export interface UserState {
  account?: Account,
  accessToken?: string,
  refreshToken?: string
}

// Define the initial state using that type
const initialState: UserState = {
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher<GraphQLResponseAction<LoginResult>>(loginAsync.settled, (state, { payload }) => {
      if (!payload.errors && payload.data) {
        return {
          ...state,
          ...payload.data
        }
      }
      return state
    })
  },
})

export const { logout } = userSlice.actions

export const userReducer = userSlice.reducer