import { NextRequest, NextResponse } from 'next/server'
import { SessionService } from './services/session.service'

 
// 1. Specify protected and public routes
const publicRoutes = [
  '/login',
  '/register',
  '/verification',
  '/reset-password'
]
const protectedRoutes = [
  '/admin',
  '/rest',
  '/dashboard',
  '/onboarding'
]

const isIncludeRoute = (routes: string[], path: string): boolean => {
  return routes.filter(route => path.includes(route)).length > 0
}
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or publi
  const path = req.nextUrl.pathname
  const isProtectedRoute = isIncludeRoute(protectedRoutes, path)
  const isPublicRoute = isIncludeRoute(publicRoutes, path)
 
  const session = await SessionService.getSession()
 
  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.account?.id) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  // 6. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.account?.id &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}