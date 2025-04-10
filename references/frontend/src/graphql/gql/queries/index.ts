import { QueryOrgArgs, QueryOrgTypesArgs } from "../generated-models"
import { OrgsQuery } from "./orgs"
import { OrgTypesQuery } from "./orgTypes"

export type QueryKeys =
    'orgs' |
    'orgTypes'

export type QueryArgsDefs = {
    orgs: QueryOrgArgs,
    orgTypes: QueryOrgTypesArgs
}

export const Queries = {
    orgs: OrgsQuery,
    orgTypes: OrgTypesQuery
}