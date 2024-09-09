import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrentUser } from 'aws-amplify/auth';
import './amplify-config';

export async function middleware(request: NextRequest) {
  console.log('Middleware called for:', request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith('/auth') || request.nextUrl.pathname.startsWith('/api/auth')) {
    console.log('Skipping auth check for:', request.nextUrl.pathname);
    return NextResponse.next();
  }

  try {
    await getCurrentUser();
    console.log('User authenticated for:', request.nextUrl.pathname);
    return NextResponse.next();
  } catch {
    console.log('User not authenticated, redirecting to /auth');
    return NextResponse.redirect(new URL('/auth', request.url));
  }
}

export const config = {
  matcher: ['/((?!api/auth|auth|_next/static|.*\\.js$).*)'],
};
