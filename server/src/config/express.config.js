const express = require("express")
const routerConfig = require("./router.config")
const app = express()
const fs = require("fs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api", routerConfig)

//404
app.use((req, res, next) => {
    next({
        code: 404,
        message: "Resource not found",
        status: "NOT_FOUND"
    })
  
})

// Custom error-handling middleware
app.use((err, req, res, next) => {
    let code = err.code || 500
    let errorDetail = err.detail || null
    let msg = err.message || "Oops! Something went wrong."
    let status = err.status || "SERVER_ERROR"

    // Safe file cleanup
    if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
    }

    res.status(code).json({
        error: errorDetail,
        message: msg,
        status: status,
        options: null
    });
});
module.exports = app
