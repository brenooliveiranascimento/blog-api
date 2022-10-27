const joi = require('joi');

const authValidation = (req, res, next) => {
  const authSchema = joi.object({
    email: joi.string().email().required,
    displayName: joi.string().required().length(8),
    password: joi.string().required().length(6),
  });

  const { error } = authSchema.validate({ ...req.body });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};

module.exports = authValidation;
