const express = require("express")
const cors =require("cors")
const app = express()

app.use(cors())
var username = "Shankar"
var password = 123

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res)
{
    console.log(req.query.username)
    if(req.body.username===username && req.body.password==password)
        {
            res.send(true)
        }
        else{
            res.send(false)
        }
})

app.listen(5001,function()
{
    console.log("server started")
})