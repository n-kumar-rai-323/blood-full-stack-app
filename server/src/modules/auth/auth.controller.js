const cloudinarySvc = require("../../service/cloudinary.service")
const bcrypt = require("bcryptjs")
const emailSvc = require("../../service/email.service")
class AuthController {
    registerUser = async (req, res, next) => {
    try {
        const payload = req.body

        if (!req.file) {
            return next({
                code: 400,
                message: "Image is required",
                status: "VALIDATION_ERROR"
            })
        }

        const uploadResult = await cloudinarySvc.uploadFile(req.file.path, "user/")
        payload.image = uploadResult.secure_url

        payload.password = await bcrypt.hash(payload.password, 12)

        delete payload.confirmPassword 
       await emailSvc.sendEmail({
        to:payload.email,
        sub:"Test Email",
        message:"<h1>Hello world</h1>"
       })
        res.json({
            data: { payload },
            message: "User Register Successfully",
            status: "SUCCESS_FULLY_REGISTER",
            options: null
        })

    } catch (exception) {
        next(exception)
    }
}
}

const authCtrl = new AuthController()

module.exports = authCtrl