'use client';

import React, { useState } from 'react';
import { signUp, signIn, type SignUpInput, signInWithRedirect } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export function AuthForm() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        const signUpParams: SignUpInput = {
          username: email,
          password,
        };
        await signUp(signUpParams);
        alert('Sign up successful. Please check your email for verification.');
      } else {
        await signIn({ username: email, password });
        router.push('/'); // Use Next.js routing instead of window.location
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect({ provider: 'Google' });
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('Failed to sign in with Google');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <button type="button" onClick={handleGoogleSignIn} className="w-full p-2 bg-red-500 text-white rounded">
        Sign in with Google
      </button>
      <p className="text-red-500">{error}</p>
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500">
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </form>
  );
}
