'use client';

import React from 'react';
import { Amplify } from 'aws-amplify';
import '../amplify-config';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
