const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET);
  return token;
};

const validateJwt = async (token) => {
  if (!token) return { error: { message: 'token dont exists' } };
  return jwt.decode(token, process.env.JWT_SECRET);
};

module.exports = {
  createToken,
  validateJwt,
};
