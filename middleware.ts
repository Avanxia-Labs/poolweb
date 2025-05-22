import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware triggered. Pathname:', request.nextUrl.pathname);
  const { pathname } = request.nextUrl

  // Permitir el acceso a la página de mantenimiento y a sus assets
  if (pathname === '/maintenance' || 
      pathname.startsWith('/_next/') || 
      pathname.startsWith('/favicon.ico')) {
    return NextResponse.next()
  }

  // Redirigir todas las demás rutas a la página de mantenimiento
  const maintenanceUrl = new URL('/maintenance', request.url)
  return NextResponse.redirect(maintenanceUrl)
}

export const config = {
  // Aplicar el middleware a TODAS las rutas
  matcher: ['/(.*)', '/'],
}
