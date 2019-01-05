// https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v1-nodejs-webapi
// https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs

import * as passport from "passport";
import { BearerStrategy } from "passport-azure-ad";
import * as restify from "restify";
import * as restifyPlugins from "restify-plugins";

const tenantName    = "velingeorgiev";
const clientID      =  "74f4223e-fb8a-499f-b851-2ae8c72553fa";

const credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`, 
  clientID: clientID
};

const authenticatedUserTokens = [];

const authenticationStrategy = new BearerStrategy(credentials, (token: any, done: Function) => {
  
  let currentUser;

  const userToken: any = authenticatedUserTokens.find((user: any): boolean => {
      currentUser = user;

      return user.sub === token.sub;
  });

  if(!userToken) {
      authenticatedUserTokens.push(token);
  }

  return done(null, currentUser, token);
});

passport.use(authenticationStrategy);

const server = restify.createServer({ name: 'Azure Active Directroy with Node.js Demo' });
server.use(restifyPlugins.authorizationParser());
server.use(passport.initialize());
server.use(passport.session());

server.get('/', (req: any, res: any, next: any) => {

  console.log(req);

  res.send(200, 'Try: curl -isS -X GET http://<SITE_URL>/api');
  next();
});

server.get('/api', passport.authenticate('oauth-bearer', { session: false }), (req: any, res: any, next: any): any => {
  
  console.log(req);

  res.json({ message: 'response from API endpoint' });

  return next();
});

server.listen(process.env.PORT || 3000);

console.log('Server running http://localhost:3000');