const express = require('express');
const app = express();
// 配置默认模板引擎
app.set('view engine','ejs');
// 配置 默认模板页面的存放路径
app.set('views','./view');
// 创建一个数据对象
const user = {
    name:'hello',
    age:30,
    hobby:['eat','sleep','play']
}
app.get('/submit',(req,res)=>{
    res.render('user.ejs',user);
})

app.listen('4100',()=>{
    console.log('express running at http://127.0.0.1:4100');
})
