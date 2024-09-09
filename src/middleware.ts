import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrentUser } from 'aws-amplify/auth';
import './amplify-config';

export async function middleware(request: NextRequest) {
  try {
    await getCurrentUser();
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/api/auth', request.url));
  }
}

export const config = {
  matcher: ['/api/:path*'],
};
