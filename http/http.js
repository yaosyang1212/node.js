const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request',(req,res)=>{
    // console.log('请求成功');
    // res.end('hello')
    const url = req.url;
    if(url==='/'||url==='/index.html'){
        fs.readFile(path.join(__dirname,'./view/index.html'),(err,data)=>{
            if(err) return res.end('500');
            res.end(data);
        })
    }else if(url==='/movie.html'){
        fs.readFile(path.join(__dirname,'./view/movie.html'),(err,data)=>{
            if(err) return res.end('500');
            res.end(data);
        })
    }else if(url==='/about.html'){
        fs.readFile(path.join(__dirname,'./view/about.html'),(err,data)=>{
            if(err) return res.end('500');
            res.end(data);
        })
    }else{
        fs.readFile(path.join(__dirname,'./view/404.html'),(err,data)=>{
            if(err) return res.end('500');
            res.end(data);
        })
    }
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('server running at http://127.0.0.1:3000');
})