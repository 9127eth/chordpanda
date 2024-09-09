'use client';

import React from 'react';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID as string,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID as string,
    },
  },
});

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
