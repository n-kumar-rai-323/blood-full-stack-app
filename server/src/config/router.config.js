const routerConfig = require("express").Router()

routerConfig.get("/health", (req,res,next)=>{
res.json({
        data:null,
        message:"from default route",
        status:"SUCCESS FULL....",
        options:null
    })
})

routerConfig.get("/:username", (req, res,next)=>{
let data = req.params
res.json({
    data : data,
    message:"Params Data",
    status:"SUCCESS",
    options:"null"
})
})
module.exports=routerConfig