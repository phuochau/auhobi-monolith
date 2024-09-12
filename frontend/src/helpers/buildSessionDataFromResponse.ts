import { GraphQLAPI } from "@/graphql/api"
import { AppendSession } from "@/graphql/models/apppend-session.models"
import _ from "lodash"

export const buildSessionDataFromResponse = <T>(appendSessions: AppendSession[], response: GraphQLAPI.Response<T>) => {
    const sessionData: any = {}
    for (const item of appendSessions) {
        sessionData[item.sessionField] = item.responseField.length ? _.get(response.data, item.responseField) : response.data
    }

    return sessionData
}