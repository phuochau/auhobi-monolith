import { Account } from "@/graphql/gql/generated-models"
import { RootState } from "../store"


// Other code such as selectors can use the imported `RootState` type
export const selectCurrentAccount = (state: RootState): Account | undefined => state.user.account
export const selectAccessToken = (state: RootState): string | undefined => state.user.accessToken
export const selectRefreshToken = (state: RootState): string | undefined => state.user.refreshToken