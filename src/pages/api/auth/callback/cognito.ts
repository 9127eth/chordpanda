import { NextApiRequest, NextApiResponse } from 'next';
import { Amplify } from 'aws-amplify';
import { signIn, getCurrentUser } from '@aws-amplify/auth';
import * as config from '@/amplify-config';

Amplify.configure(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { code } = req.query;
    
    if (typeof code !== 'string') {
      throw new Error('Invalid authorization code');
    }
    // Use the code to sign in
    await signIn({ username: 'dummy', password: code });

    const { username } = await getCurrentUser();

    // Here you can set cookies, session, etc.
    res.status(200).json({ success: true, username });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(400).json({ success: false, error: 'Authentication failed' });
  }
}
