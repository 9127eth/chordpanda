import { NextResponse } from 'next/server';
import { getCachedAPIKey } from '../../../utils/APIKeyManager';

export async function POST(request: Request) {
  try {
    const { keyName } = await request.json();

    if (!keyName) {
      return NextResponse.json({ message: 'Key name is required' }, { status: 400 });
    }

    const apiKey = await getCachedAPIKey(keyName);
    return NextResponse.json({ apiKey });
  } catch (error) {
    console.error('Error retrieving API key:', error);
    return NextResponse.json({ message: 'Error retrieving API key' }, { status: 500 });
  }
}
