// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {
//   const userAgent = request.headers.get('user-agent') || ''
//   const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent)

//   const response = NextResponse.next()
//   response.cookies.set('isMobile', String(isMobile), {
//     path: '/',
//     httpOnly: false,
//   })

//   return response
// }

// export const config = {
//   matcher: ['/', '/about', '/contact'],
// }
