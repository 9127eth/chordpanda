import { useState } from 'react';
import { useSession } from 'next-auth/react';

export function APIKeyTest() {
  const { data: session, status } = useSession();
  const [testResult, setTestResult] = useState<string | null>(null);

  const testAPIKey = async () => {
    if (status === 'loading') {
      setTestResult('Loading session...');
      return;
    }

    if (status === 'unauthenticated') {
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
      <button onClick={testAPIKey} disabled={status === 'loading'}>
        Test API Key
      </button>
      {testResult && <p>{testResult}</p>}
    </div>
  );
}
