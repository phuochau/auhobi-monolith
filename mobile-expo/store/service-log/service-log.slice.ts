import { createSlice } from '@reduxjs/toolkit'
import { ServiceLogConnection, ServiceLogEdge } from '@/graphql/gql/generated-models'
import _ from 'lodash'
import { signOutAction } from '../user/actions/sign-out.action'
import { listServiceLog } from './actions/list-service-logs.action'

// Define a type for the slice state
export interface ServiceLogState {
  fetchingLogs: boolean
  logs: ServiceLogEdge[]
}

// Define the initial state using that type
const initialState: ServiceLogState = {
  fetchingLogs: false,
  logs: []
}

export const serviceLogSlice = createSlice({
  name: 'serviceLog',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(listServiceLog.pending, (state) => ({
      ...state,
      fetchingLogs: true
    })),
    builder.addMatcher(listServiceLog.settled, (state, res) => {
          const connections = ((res.payload as any)?.data || []) as ServiceLogConnection
          
          return {
            ...state,
            fetchingLogs: false,
            logs: connections.edges || []
          }
    }),
    builder.addMatcher<boolean>(signOutAction.settled, (state, result) => {
      if (result) {
        return initialState
      }

      return state
    })
  },
})

export const serviceLogReducer = serviceLogSlice.reducer