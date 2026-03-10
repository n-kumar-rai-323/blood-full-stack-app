const authRouter = require("../modules/auth/auth.router")

const routerConfig = require("express").Router()

routerConfig.get("/health", (req, res, next) => {
    res.json({
        data: null,
        message: "from default route",
        status: "SUCCESS FULL....",
        options: null
    })
})

// routerConfig.get("/:username", (req, res, next) => {
//     let data = req.params
//     let query = req.query
//     let header = req.headers
//     res.json({
//         data: data, query, header,
//         message: "Params Data",
//         status: "SUCCESS",
//         options: "null"
//     })
// })

routerConfig.use("/auth",authRouter)
module.exports = routerConfig