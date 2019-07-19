var http=require('http')
var fs=require('fs')

http.createServer((req,res)=>{
    if(req.url=='./favicon.ico'){
       return
    }
    // fs.mkdir('./aa',(err)=>{
    //     res.end('sssssss')
    // })
    // fs.stat('./aa',(err,stats)=>{
    //     // console.log(stats.isFile())
    //     console.log(stats.isDirectory())
    //     res.end()
    // })
    //createReadStream 建立一个读取文件流
  var stream = fs.createReadStream('./static/1.txt')
  var content=''
  //data 在这里是个事件
  //data 数据读取的过程  end 数据读取完成
  stream.on('data',(err,chunk)=>{
      content+=chunk
      console.log(content)
  })
  stream.on('end',(err)=>{
      console.log('数据接受完毕')
  })
  res.end()
}).listen(3000)