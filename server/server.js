const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const booksRouter = require('./books.js');
// const userRouter = require('./user.js');

app.use( bodyParser.json() );

// 解决node跨域问题
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/books', booksRouter);
// app.use('/user', userRouter);

app.listen(7000)