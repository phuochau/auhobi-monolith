import { AuthService } from "@/services/auth.service"
import _ from 'lodash'
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const result = await AuthService.login(body.email, body.password)
  
  return Response.json({
    errors: result?.response.errors,
    data: result.success
  })
}