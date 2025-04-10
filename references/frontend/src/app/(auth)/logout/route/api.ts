import { AuthService } from "@/services/auth.service"
import _ from 'lodash'
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    AuthService.logout()
}