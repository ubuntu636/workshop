const Joi = require('joi');

const formValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@sode-edu.in$')).required(),
  usn: Joi.string().pattern(new RegExp('^[0-9]{1}[a-zA-Z]{2}[0-9]{2}[a-zA-Z]{2}[0-9]{3}$')).required(),
  section: Joi.string().required(),
  year: Joi.string().required()
});

module.exports = { formValidationSchema };
