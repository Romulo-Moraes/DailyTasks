const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(".")))

app.get("/", function(req,res){
    res.sendfile("./pages/index.html")
})
app.get("/School", function(req,res){
    res.sendfile("./pages/School.html")
})

app.get("/Personal", function(req,res){
    res.sendfile("./pages/Personal.html")
})

app.get("/Daily", function(req,res){
    res.sendfile("./pages/Daily.html")
})

app.get("/Delay" , function(req,res){
    res.sendfile("./pages/Delay.html")
})

app.get("/Statistics", function(req,res){
    res.sendfile("./pages/Statistics.html")
})

app.listen(1234, function(){
    console.log("Servidor rodando na porta 1234")
})