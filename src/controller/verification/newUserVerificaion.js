const joi = require('joi');

const authValidation = async (userData) => {
  const authSchema = joi.object({
    password: joi.string().required().min(6),
    displayName: joi.string().required().min(8),
    email: joi.string().email().required(),
    image: joi.string().optional(),
  });

  const { error, value } = authSchema.validate(userData);
  if (error) {
    return { error: true, message: error.message };
  }
  return { error: false, message: value };
};

module.exports = authValidation;
