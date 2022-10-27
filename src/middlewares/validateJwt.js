// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

require('dotenv/config');

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');
  const secret = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
