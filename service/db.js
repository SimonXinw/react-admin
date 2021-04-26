//  引入 数据库
const mysql = require("mysql");
// 创建 数据库链接
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "test",
});

db.connect((err) => {
  if (err) throw err;
  console.log("mysql 链接成功");
});

module.exports = db;
