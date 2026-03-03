const express = require("express")
const routerConfig = require("./router.config")

const app = express()

app.use("/api", routerConfig)
// app.use('/', (req, res, next)=>{
//     res.json({
//         data:null,
//         message:"from default route",
//         status:"SUCCESS FULL....",
//         options:null
//     })
// })
module.exports=app
