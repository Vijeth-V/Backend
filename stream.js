var http = require('http')
var fs = require('fs')

const server = http.createServer((req,res) =>{
    // const text = fs.readFileSync('./big.txt', 'utf8') 
    // res.end(text)


    // using createReadStream and pipes the files will be chunked and sent to server. It reduces server load
    const fileStream = fs.createReadStream('./big.txt', 'utf8')
    fileStream.on('open', () =>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err) =>{
        res.end(err)
    })
})

server.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})
