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
          domain: 'https://chordpanda.auth.us-east-1.amazoncognito.com',
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: ['http://localhost:3000/'],
          redirectSignOut: ['http://localhost:3000/'],
          responseType: 'code',
          providers: ['Google']
        }
      }
    }
  },
});
