const bodyValidator = require("../../middlewares/request-validator.middleware")
const uploader = require("../../middlewares/uploader.middleware")
const authCtrl = require("./auth.controller")
const { UserRegisterDTO } = require("./auth.validator")

const authRouter = require("express").Router()


authRouter.post(
  "/register",
  bodyValidator(UserRegisterDTO),
  uploader().single("image"),
  authCtrl.registerUser
)
module.exports = authRouter