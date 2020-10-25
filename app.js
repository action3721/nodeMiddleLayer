const express = require('express');
const app = express();
const router = require('./src/router');
//设置模版
app.engine('art', require('express-art-template'));
app.set('views', './src/views')
app.use('/', router);
app.listen(3500);