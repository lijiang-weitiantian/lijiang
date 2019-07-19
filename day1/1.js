var http=require('http')
var fs=require('fs')
http.createServer((rep,res)=>{
    if(rep.url=='/red'){
        fs.readFile('./static/red.html',(err,data)=>{
            res.end(data)
        })
    }
    
}).listen(3000)