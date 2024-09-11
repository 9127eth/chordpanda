import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
      signUpVerificationMethod: 'code',
      identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID as string,
      loginWith: {
        oauth: {
          domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN as string,
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: [process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN as string],
          redirectSignOut: [process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT as string],
          responseType: 'code',
          providers: ['Google']
        }
      }
    }
  },
});
