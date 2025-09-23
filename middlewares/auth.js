import dotenv from "dotenv";
dotenv.config();

import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";


const { AUTH0_DOMAIN, AUTH0_AUDIENCE } = process.env;
console.log("Auth0 Config Loaded:", AUTH0_DOMAIN, AUTH0_AUDIENCE);

export const authMiddleware = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: AUTH0_AUDIENCE,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
  requestProperty: "user", 
});


export const authErrorHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Invalid token" });
  }
  next(err);
};
