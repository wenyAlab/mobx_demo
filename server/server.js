const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');

const model = require('./db/model');
const Reviews = model.getModel('book_review');

const booksRouter = require('./books.js');
// const userRouter = require('./user.js');


// https.get('https://api.douban.com/v2/book/1770782/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b', function (response) {
    // var body = [];
    // console.log(response.statusCode);
    // console.log(response.headers);
    // console.log(response);
    // response.on('data', function (chunk) {
    //     body.push(chunk);
    // });

    // response.on('end', function () {
    //     body = Buffer.concat(body);
    //     console.log(body.toString());
    // });
// });





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