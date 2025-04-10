/**
 * This Client Api uses to request from client to next js api and forward it to graphql
 */

import { HttpService } from "@/lib/http"
import { ForwardQueryRequest } from "./models/forward-query-request.model"
import { GraphQLAPI } from "./api"
import { ForwardMutationRequest } from "./models/forward-mutation-request.model"

export namespace ClientApi {
    export const query = async <T, P>(request: ForwardQueryRequest<P>): Promise<GraphQLAPI.Response<T>> => {
        return HttpService.post<GraphQLAPI.Response<T>>({
            uri: `/api/query`,
            data: request
        })
    }

    export const mutate = async <T, P>(request: ForwardMutationRequest<P>): Promise<GraphQLAPI.Response<T>> => {
        return HttpService.post<GraphQLAPI.Response<T>>({
            uri: `/api/mutation`,
            data: request
        })
    }
}