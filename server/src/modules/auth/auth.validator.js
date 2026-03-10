const Joi = require("joi")
const { UserRole, BloodGroup } = require("../../config/constants")

const UserRegisterDTO = Joi.object({

  name: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 2 characters"
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.email": "Invalid email format"
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters"
    }),

  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Passwords do not match"
    }),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be 10 digits"
    }),

  bloodGroup: Joi.string().valid(...Object.values(BloodGroup)).required(),

  address: Joi.string()
    .min(3)
    .max(100)
    .required(),
  role: Joi.string()
  .valid(...Object.values(UserRole))
  .default(UserRole.DONOR)

})
module.exports={UserRegisterDTO}