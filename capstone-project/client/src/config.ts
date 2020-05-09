//Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ez40d6syq5'
export const apiEndpoint = `https://ez40d6syq5.execute-api.ap-south-1.amazonaws.com/dev`


export const authConfig = {
  //Create an Auth0 application and copy values from it into this map
  domain: 'dev-cpdjnngj.auth0.com',               //domain: Auth0 Domain
  clientId: '1kMA0dGEP79092ccvlcMlZ77mnxTmzMo',   //clientId: Auth0 Client ID
  callbackUrl: 'http://localhost:3000/callback'
}