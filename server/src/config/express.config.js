const express = require("express")
const routerConfig = require("./router.config")
const app = express()

app.use(express.json())
app.use(express.urlencoded())


app.use("/api", routerConfig)

//404
app.use((req, res, next) => {
    next({
        code: 404,
        message: "Resource not found",
        status: "NOT_FOUND"
    })
    // res.status(404).json({
    //     erro:null,
    //     message:"Resource not found",
    //     status:"NOT_FOUND",
    //     options:null
    // })
})
// Custom error-handling middleware
app.use((err, req, res, next) => {
    let code = err.code || 500
    let errorDetail = err.detail || null
    let msg = err.message || "Oops! Something went wrong."
    let status = err.status || "SERVER_ERROR"
    res.status(code).json({
        error: errorDetail,
        message: msg,
        status: status,
        options: null
    });
});

module.exports = app
