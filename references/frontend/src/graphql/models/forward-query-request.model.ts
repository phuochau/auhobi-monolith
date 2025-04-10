import { QueryKeys } from "../gql/queries";
import { AppendSession } from "./apppend-session.models";

export interface ForwardQueryRequest<T> {
    name: QueryKeys,
    variables?: T,
    requiredAuth?: boolean,
    appendSessions?: AppendSession[]
}