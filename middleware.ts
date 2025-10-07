import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const maintenanceEnabled = process.env.MAINTENANCE_MODE === 'true'

  if (!maintenanceEnabled) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (
    pathname === '/maintenance' ||
    pathname.startsWith('/_next/') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  const maintenanceUrl = new URL('/maintenance', request.url)
  return NextResponse.redirect(maintenanceUrl)
}

export const config = {
  matcher: ['/(.*)', '/'],
}
