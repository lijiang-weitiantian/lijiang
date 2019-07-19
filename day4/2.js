var express = require("express")
var app = express()
var fs = require("fs")
//设置模板引擎
//app.set
//engine 引擎
//设置模板引擎为ejs
app.set("view engine", "ejs")
//指定模板的具体目录
app.set("views", __dirname + "/views")
// app.engine("views emgine", "ejs")
app.get("/", function (req, res) {
    //express 包含ejs res=>render


    res.render("index", {
        list:["1", "2", "3"]
    })

})
app.listen(3000)