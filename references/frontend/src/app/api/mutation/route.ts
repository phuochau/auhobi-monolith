import { GraphQLAPI } from "@/graphql/api"
import { Mutation } from "@/graphql/gql/generated-models"
import { Mutations, MutationArgsDefs } from "@/graphql/gql/mutations"
import { ForwardMutationRequest } from "@/graphql/models/forward-mutation-request.model"
import { buildSessionDataFromResponse } from "@/helpers/buildSessionDataFromResponse"
import { SessionService } from "@/services/session.service"
import _ from 'lodash'
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: ForwardMutationRequest<any> = await req.json()
    const name = body.name
    const variables = body.variables
    const requiredAuth = body.requiredAuth || false
    const appendSessions = body.appendSessions

    const response = await GraphQLAPI.query<Mutation[typeof name], MutationArgsDefs[typeof name]>(requiredAuth, Mutations[name], variables)

    if (appendSessions?.length && response.data) {
        const sessionData = buildSessionDataFromResponse(appendSessions, response)
        await SessionService.appendSessionData(sessionData)
    }

    return NextResponse.json(response)
}