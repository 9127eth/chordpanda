'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { APIKeyTest } from './APIKeyTest';

const SoundCardGenerator = dynamic(() => import('./SoundCardGenerator'), { ssr: false });

export default function HomePage() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">AI Piano App</h1>
      <SoundCardGenerator />
      <APIKeyTest />
    </main>
  );
}
