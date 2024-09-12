import { GraphQLAPI } from "@/graphql/api"
import { Query } from "@/graphql/gql/generated-models"
import { Queries, QueryArgsDefs } from "@/graphql/gql/queries"
import { ForwardQueryRequest } from "@/graphql/models/forward-query-request.model"
import { buildSessionDataFromResponse } from "@/helpers/buildSessionDataFromResponse"
import { SessionService } from "@/services/session.service"
import _ from 'lodash'
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: ForwardQueryRequest<any> = await req.json()
    const name = body.name
    const variables = body.variables
    const requiredAuth = body.requiredAuth || false
    const appendSessions = body.appendSessions

    const response = await GraphQLAPI.query<Query[typeof name], QueryArgsDefs[typeof name]>(requiredAuth, Queries[name], variables)

    if (appendSessions?.length && response.data) {
        const sessionData = buildSessionDataFromResponse(appendSessions, response)
        await SessionService.appendSessionData(sessionData)
    }

    return NextResponse.json(response)
}