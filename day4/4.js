var express=require("express")
var router=express.Router()
var app=express()
app.use(router)
router.get("/",(req,res)=>{
    res.send({"success":"ok"})
})
router.get("/getcode",(req,res)=>{
    var rendomUnm=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str="qwertyuiopasdfghjklzxcvbnm0987654321"
    var result=""
    for(var i=0;i<4;i++){
        result+=str[rendomUnm(0,str.length-1)]
    }
    res.send({"data":result})
})
app.listen(3000)