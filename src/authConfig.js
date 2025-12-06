export const authConfig = {
  clientId: 'oauth2-pkce-client',
  authorizationEndpoint: 'http://35.154.160.83:8181/realms/fitness-app/protocol/openid-connect/auth',
  tokenEndpoint: 'http://35.154.160.83:8181/realms/fitness-app/protocol/openid-connect/token',
  redirectUri: 'https://fit-ai-frontend.vercel.app',
  scope: 'openid profile email offline_access',
  onRefreshTokenExpire: (event) => event.logIn(),
}