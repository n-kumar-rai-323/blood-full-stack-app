// ES5 
const http = require("http")
const app = require("./src/config/express.config")
//ES6 
// import http from "http"

const PORT = 8008
const server= http.createServer(app)

server.listen(PORT, 'localhost', (err)=>{
    if(!err){
        console.log(`Application Running ${PORT}`)
    }
})
