import { createSlice } from '@reduxjs/toolkit'
import { Account, LoginResult, UserVehicle } from '@/graphql/gql/generated-models'
import { GraphQLResponseAction } from '../types/graphql-response-payload'
import { signInAction } from './actions/sign-in.action'
import { addVehicleAction } from './actions/add-vehicle.action'
import _ from 'lodash'
import { REHYDRATE } from 'redux-persist'
import { GraphQLAPI } from '@/graphql/api'
import { meAction } from './actions/me.action'
import { signOutAction } from './actions/sign-out.action'

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
  },
  extraReducers: (builder) => {
    builder.addCase<typeof REHYDRATE, { type: typeof REHYDRATE, payload: Partial<{ user: UserState }> }>(REHYDRATE, (state, action) => {
      const userState = action.payload?.user
      if (userState?.accessToken && userState?.refreshToken) {
        GraphQLAPI.setTokens(userState.accessToken, userState.refreshToken)
      }
      return userState
    }),
    builder.addMatcher<GraphQLResponseAction<Account>>(meAction.settled, (state, { payload }) => {
      if (!payload.errors && payload.data) {
        return {
          ...state,
          account: payload.data
        }
      }
      return state
    }),
    builder.addMatcher<GraphQLResponseAction<LoginResult>>(signInAction.settled, (state, { payload }) => {
      if (!payload.errors && payload.data) {
        return {
          ...state,
          ...payload.data
        }
      }
      return state
    }),
    builder.addMatcher<GraphQLResponseAction<UserVehicle>>(addVehicleAction.settled, (state, { payload }) => {
      if (!payload.errors && payload.data) {
        const account = _.cloneDeep(state.account)
        const currentUserVehicles = account!.user!.vehicles?.nodes || []
        const userVehicle = payload.data!

        currentUserVehicles.push(userVehicle)


        return {
          ...state,
          account: _.set(account!, 'user.vehicles.nodes', currentUserVehicles)
        }
      }
      return state
    }),
    builder.addMatcher<boolean>(signOutAction.settled, (state, result) => {
      if (result) {
        return initialState
      }

      return state
    })
  },
})

export const userReducer = userSlice.reducer