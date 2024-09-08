import { SecretsManager } from '@aws-sdk/client-secrets-manager';

const secretsManager = new SecretsManager({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function getAPIKey(keyName: string): Promise<string> {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: keyName });
    if (data.SecretString) {
      return data.SecretString;
    } else {
      throw new Error('Secret not found or invalid format');
    }
  } catch (error) {
    console.error('Error retrieving API key:', error);
    throw new Error(`Failed to retrieve API key: ${keyName}`);
  }
}

export async function setAPIKey(keyName: string, keyValue: string): Promise<void> {
  try {
    await secretsManager.putSecretValue({
      SecretId: keyName,
      SecretString: keyValue,
    });
  } catch (error) {
    console.error('Error setting API key:', error);
    throw new Error(`Failed to set API key: ${keyName}`);
  }
}

const cache: { [key: string]: { value: string; timestamp: number } } = {};
const CACHE_TTL = 3600000; // 1 hour in milliseconds

export async function getCachedAPIKey(keyName: string): Promise<string> {
  const now = Date.now();
  if (cache[keyName] && now - cache[keyName].timestamp < CACHE_TTL) {
    return cache[keyName].value;
  }

  const apiKey = await getAPIKey(keyName);
  cache[keyName] = { value: apiKey, timestamp: now };
  return apiKey;
}

export async function rotateAWSAccessKeys(): Promise<void> {
  // Implement AWS access key rotation logic here
  // This would typically involve creating a new access key,
  // updating the application to use the new key,
  // and then deleting the old key
}
