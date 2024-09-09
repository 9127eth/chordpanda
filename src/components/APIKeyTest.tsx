import { useState } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

export function APIKeyTest() {
  const [testResult, setTestResult] = useState<string | null>(null);

  const testAPIKey = async () => {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};

      if (!idToken) {
        throw new Error('No ID token available');
      }

      const response = await fetch('/api/test-api-key', {
        headers: {
          Authorization: `Bearer ${idToken.toString()}`,
        },
      });
      const data = await response.json();
      setTestResult(data.message);
    } catch (error) {
      console.error('Error testing API key:', error);
      setTestResult('Error testing API key');
    }
  };

  return (
    <div>
      <button onClick={testAPIKey}>Test API Key</button>
      {testResult && <p>{testResult}</p>}
    </div>
  );
}
