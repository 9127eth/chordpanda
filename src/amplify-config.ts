import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID as string,
      userPoolClientId: process.env.COGNITO_CLIENT_ID as string,
      signUpVerificationMethod: 'code',
      identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID as string,
      loginWith: {
        oauth: {
          domain: 'chordpanda.auth.us-east-1.amazoncognito.com',
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: [
            'https://chordpanda-qsazieon8-9127eths-projects.vercel.app/api/auth/callback/cognito',
            'https://www.chordpanda.com/api/auth/callback/cognito',
            'http://localhost:3000/api/auth/callback/cognito',
            'http://localhost:3003/api/auth/callback/cognito',
            'http://localhost:3001/api/auth/callback/cognito'
          ],
          redirectSignOut: [
            'https://chordpanda-qsazieon8-9127eths-projects.vercel.app/',
            'https://www.chordpanda.com/',
            'http://localhost:3000/',
            'http://localhost:3003/',
            'http://localhost:3001/'
          ],
          responseType: 'code',
          providers: ['Google']
        }
      }
    }
  },
});
