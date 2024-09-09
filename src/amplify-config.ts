import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID as string,
      userPoolClientId: process.env.COGNITO_CLIENT_ID as string,
    },
  },
});
