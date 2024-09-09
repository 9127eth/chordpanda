'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { signOut } from 'aws-amplify/auth';
import { APIKeyTest } from './APIKeyTest';

const SoundCardGenerator = dynamic(() => import('./SoundCardGenerator'), { ssr: false });

export default function HomePage() {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/'; // Redirect to home page after sign out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to AI Piano App</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <SoundCardGenerator />
      <APIKeyTest />
    </main>
  );
}
