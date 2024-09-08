import { useState } from 'react';
import { useSession } from 'next-auth/react';

export function APIKeyTest() {
  const { data: session } = useSession();
  const [testResult, setTestResult] = useState<string | null>(null);

  const testAPIKey = async () => {
    if (!session) {
      setTestResult('You must be logged in to test the API key.');
      return;
    }

    try {
      const response = await fetch('/api/test-api-key');
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
