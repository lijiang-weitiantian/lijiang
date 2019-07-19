var http=require('http')
var ejs=require('ejs')
var fs=require('fs')
http.createServer((req,res)=>{
    var datas={
        'list':[
          {
            name: 'lijiang',
            age:18  
          },
          {
            name: 'liqiang',
            age:18
          }
        ]
    }
    //ejs render渲染 模块 数据 compiler 编译
    
    //读取模块
   fs.readFile('./index.ejs',(err,data)=>{
       //template ejs模块
       var template=data.toString()
       //result ejs渲染的结果 render 模块 数据
       var result=ejs.render(template,datas)
       res.end(result)
   })
}).listen(3000)