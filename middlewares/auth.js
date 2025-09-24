// auth.js
// Authentication removed, all routes are now public
export const authMiddleware = (req, res, next) => next();
export const authErrorHandler = (err, req, res, next) => next();
