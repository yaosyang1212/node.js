const express = require('express');
const app = express();
// 自定义模板引擎
app.engine('html',require('express-art-template'));
// 配置模板引擎
app.set('view engine','html');
// 配置模板页面存放的路径 
app.set('view','./view');

app.get('/user',(req,res)=>{
    res.render('user,html',{username:'sunwukong',age:888,hobby:['banana','orange','apple']})
})
app.listen(3002,()=>{
    console.log('express server runnig at http://127.0.0.1:3002');
})

