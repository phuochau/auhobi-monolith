import { Account, User, UserVehicle } from "@/graphql/gql/generated-models"
import { RootState } from "../store"
import _ from "lodash"


// Other code such as selectors can use the imported `RootState` type
export const selectCurrentAccount = (state: RootState): Account | undefined => state.user.account
export const selectAccessToken = (state: RootState): string | undefined => state.user.accessToken
export const selectRefreshToken = (state: RootState): string | undefined => state.user.refreshToken
export const selectCurrentUser = (state: RootState): User | undefined => _.get(selectCurrentAccount(state), 'user')
export const selectCurrentVehicle = (state: RootState): UserVehicle | undefined => _.get(selectCurrentAccount(state), 'user.vehicles.nodes[0]')