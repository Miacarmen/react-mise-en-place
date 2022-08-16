// User login authentication

// require json web token library to check the validity of the token using a secret and expiration
const jwt = require('jsonwebtoken');

// set token secret and expiration time
const secret = 'mysecretssshhh'; // signs the token and enables server to verify if token is valid
const expiration = '2h'; // user session

module.exports = {
  // function for authenticated routes
  authMiddleware: function ({ req }) {
    // allow token to be sent via req.body, req.query, or req.headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // split token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed by the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid user token');
    }
    // return the request object so it can be passed to the resolver as `context` (react)
    return req;
  },
  // function to combine that payload, secret, and string and return token as a string
  signToken: function ({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
