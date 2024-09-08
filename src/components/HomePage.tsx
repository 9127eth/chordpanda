'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { APIKeyTest } from './APIKeyTest';

const SoundCardGenerator = dynamic(() => import('./SoundCardGenerator'), { ssr: false });

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main className="min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to AI Piano App</h1>
        <p>Please <Link href="/auth">sign in or sign up</Link> to continue.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to AI Piano App</h1>
      <SoundCardGenerator />
      <APIKeyTest />
    </main>
  );
}
