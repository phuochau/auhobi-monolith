import { ServiceLogEdge } from "@/graphql/gql/generated-models"
import { RootState } from "../store"

export const selectFetchingLogs = (state: RootState): boolean => state.serviceLog.fetchingLogs
export const selectLogs = (state: RootState): ServiceLogEdge[] => state.serviceLog.logs || []