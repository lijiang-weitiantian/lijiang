var express=require("express")
var app=express()
//执行了一个get请求
app.get('/',(req,res)=>{
    res.send("success : OK")
})
app.get("/about",(req,res)=>{
    res.send('about')
})
app.listen(3000)