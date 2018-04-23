const express =  require('express');
// 得到服务器
const app = express();
// 注册中间件的方法，托管静态资源
app.use(express.static('./view'));
app.use('/assets',express.static('./assets'));
app.listen(4000,()=>{
    console.log('express server running at http://127.0.0.1:4000');
})
