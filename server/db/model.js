const mongoose = require('mongoose');
const db_url = 'mongodb://127.0.0.1:27017/book_list';

mongoose.connect(db_url);
mongoose.connection.on("connected", () => {
  console.log("mongodb数据库连接成功")
});
mongoose.connection.on("error", () => {
  console.log("mongodb数据库连接失败")
});
const models = {
  books:{
    // books: {type:Array, require: true}
  }
}

for( let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
  getModel: function( model ) {
    return mongoose.model(model);
  },
}