const express = require('express');
const Router = express.Router();
const model = require('./db/model');
const Books = model.getModel('books');

Router.get('/list', function(req, res) {
  Books.find({}, function(err, doc) {
    if (err) {
      return res.json({code: 500, data: [], message:'读取数据出错了'})
    }
    if (doc) {
      return res.json({code: 200,done: true, pageSize: 20, total: 260,data:{items:doc}})
    }
  // }).sort({id:-1}).skip(0).limit(10)
  }).skip(0).limit(10)

})

module.exports = Router;