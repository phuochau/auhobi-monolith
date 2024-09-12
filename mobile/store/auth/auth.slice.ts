import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Account, LoginResult } from '@/graphql/gql/generated-models'
import { loginAsync } from './auth.actions'
import { GraphQLResponseAction } from '../types/graphql-response-payload'

// Define a type for the slice state
export interface AuthState {
  account?: Account,
  accessToken?: string,
  refreshToken?: string
}

// Define the initial state using that type
const initialState: AuthState = {
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResult>) => {
      return {
        ...state,
        account: action.payload.account,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
    },
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

export const { login } = authSlice.actions

export const authReducer = authSlice.reducer