import { GraphQLResponse } from "@/graphql/types/graphql-response";

export interface GraphQLResponseAction<T> { 
    payload: GraphQLResponse<T>
}