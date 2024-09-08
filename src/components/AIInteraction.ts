import { getAPIKey } from '../utils/APIKeyManager';

export async function getOpenAIKey(): Promise<string> {
  return await getAPIKey('openai-api-key');
}

// Other AI interaction functions...
