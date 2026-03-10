const bodyValidator = require("../../middlewares/request-validator.middleware")
const authCtrl = require("./auth.controller")
const { UserRegisterDTO } = require("./auth.validator")

const authRouter = require("express").Router()

authRouter.post("/register", bodyValidator(UserRegisterDTO),authCtrl.registerUser)

module.exports = authRouter