const express = require('express');
const path = require('path');
const app = express();

//requiring all public assets
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.get('/home',(req,res)=>{
    res.send("Home page")
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000....")
})