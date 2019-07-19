var http = require('http')
var url = require('url')
var fs = require('fs')
http.createServer((req, res) => {
    var query = url.parse(req.url, true).query
  

        if (req.url !== '/favicon.ico') {
            if (query.username == obj.name && query.password == obj.password) {
                console.log('成功')

            } else {
                console.log('失败')
            }
        }
    


}).listen(3000)


var obj = {
    name: 'tem',
    password: 12345,
}