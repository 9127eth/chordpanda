'use client';

import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import HomePage from '../components/HomePage';
import AuthPage from './auth/page';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <HomePage /> : <AuthPage />;
}
