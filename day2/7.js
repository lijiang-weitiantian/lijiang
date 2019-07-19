var http = require('http')
var fd = require('formidable')
var sd = require('silly-datetime')
var path = require('path')
var fs = require('fs')
http.createServer((req, res) => {
    if (req.url == './favicon.ico') {
        retnru
    }
    if (req.url == '/dopost') {
        var form = new fd.IncomingForm()
        form.uploadDir = './upload'
        form.parse(req, function (err, fields, files) {

            // fields 文本域 files 文件域
            var oldpath = files.pic.path
            var extname = path.extname(files.pic.name)
            var tt = sd.format(new Date(), 'YYYYMMDDhhmmss')
            var newpath = 'upload/' + tt + extname
            var newpaths=tt + extname
            fs.rename(oldpath, newpath, (err) => {
                res.end()
            })

        })
    }
}).listen(3000)