import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/api/v1/scripts")) {
    const key = request.nextUrl.searchParams.get("scripts_api_key")
    if (key !== process.env.SCRIPTS_API_KEY) {
      return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
    }
  }
}

export const runtime = "nodejs"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
