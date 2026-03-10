class AuthController {
    registerUser = (req, res, next) => {
        const payload = req.body


        // next({
        //     data:payload,
        //     message:"User Register Success",
        //     status:"USER_REGISTER",
        //     options:null
        // })
        res.json({
            data: payload,
            message: "User Register Successfully",
            status: "SUCCESS_FULLY_REGISTER",
            options: null
        })
    }
}

const authCtrl = new AuthController()

module.exports = authCtrl