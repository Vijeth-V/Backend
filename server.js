const http = require('http')

const server = http.createServer((req,res) =>{
    console.log("server is running")
    if (req.url === '/') {
        res.end('Home page')
    }
    if (req.url === '/about') {
        res.end('About page')
    }
    res.end("Error Page")
})

server.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})