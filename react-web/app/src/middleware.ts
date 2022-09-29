import { CircleBox } from 'mdi-material-ui';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

export async  function middleware(req: NextRequest) {
  const secret_key = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret: secret_key });

  if ((!secret_key || !token) && !req.nextUrl.pathname.startsWith('/admin/login')) {
    return NextResponse.redirect(new URL('/401', req.url).toString());
  }

  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*"] }
