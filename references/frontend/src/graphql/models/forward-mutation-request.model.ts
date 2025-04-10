import { MutationKeys } from "../gql/mutations";
import { AppendSession } from "./apppend-session.models";

export interface ForwardMutationRequest<T> {
    name: MutationKeys,
    variables?: T,
    requiredAuth?: boolean,
    appendSessions?: AppendSession[]
}