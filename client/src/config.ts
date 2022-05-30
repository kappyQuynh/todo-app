// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '7aluu49ozh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/todo`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-by5e8exj.us.auth0.com', // Auth0 domain
  clientId: 'q5IjYRZXt0HK8ovYYUAzg5TmJZ7XMmSO', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
