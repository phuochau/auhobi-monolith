import { SessionService } from '@/services/session.service'
import { NextRequest, NextResponse } from 'next/server'
 
export async function GET(req: NextRequest) {
  const session = await SessionService.getSession()
  
  if (!session) {
    return NextResponse.json({
      error: 'User is not authenticated',
    }, { 
      status: 401
    })
  }

}