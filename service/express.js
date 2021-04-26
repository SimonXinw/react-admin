// 1. 引入模块
const express = require("express");
// 2. 执行方法，得到 app 实例对象
const app = express();
//  分拆 引入 mysql 链接对象
const db = require("./db.js");
// 引入token
const jsonwebtoken = require("jsonwebtoken");
// 分拆引入中间件
const { cors } = require("./middleware");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const userinfoRouter = require("./routes/userinfo");

/**
 * @中间件  先经过中间件处理
 */

app.use(express.json()); // Express 4.16.0 之前使用 bodyParser 第三方模块
app.use(express.urlencoded({ extended: true })); //处理请求体参数 解析
// app.use(function (req, res, next) {
//   // 定义 payload。需要存放到 token 中的数据
//   const payload = {
//     name: "xw",
//     admin: true,
//   };
//   const secret = "XW_NB"; // 密匙
//   const token = jsonwebtoken.sign(payload, secret, {
//     // 过期时间，以秒或描述时间跨度的字符串表示，比如 60, '2 days', '10h', '7d'
//     expiresIn: "2h",
//   });
//   console.log("token>>>>>>>>", token);
//   next();
// }); // 统一处理 请求头的 token
app.use(cors); //运用跨域的中间件,线上的时候注视即可

// 3. 监听一个请求方式创建一个数据库
app.get("/createdb", function (req, res) {
  let sql = "CREATE DATABASE test";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send("test 数据库创建成功");
    }
  });
});

// 4. 创建一个表
app.get("/createtable", (req, res) => {
  console.log("创建一个表>>>>>>>>>:");
  let sql =
    "CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(255),password VARCHAR(255),PRIMARY KEY(ID))";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send("users 表 创建成功");
    }
  });
});

// 5. 增
app.get("/add", (req, res) => {
  let params = { username: "chen", password: "第一次牛逼" };
  let sql = "INSERT INTO users SET ?";
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send("增加字段 add 值成功");
    }
  });
});

// 5.2 增加多条
app.get("/adds", (req, res) => {
  let sql = "INSERT INTO users (username,password) VALUES (huang,人),(shi,石,)";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send("test 表 adds 多条成功");
    }
  });
});

// 6. 查询
app.get("/query/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      // res.send("json 字符串>>>>>>>>", result);
      res.json(result); // json 字符串格式
    }
  });
});

// 7. 更新
app.get("/update/:id", (req, res) => {
  let newStr = "丁锋";
  let sql = `UPDATE users SET username = '${newStr}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      // res.send("json 字符串>>>>>>>>", result);
      res.json("更新 成功"); // json 字符串格式
    }
  });
});

// 8.删除
app.get("/delete/:id", (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      // res.send("json 字符串>>>>>>>>", result);
      res.send(`${req.params.id} 删除成功`);
    }
  });
});

// 使用分拆的路由模块
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/getuserinfo", userinfoRouter);

app.listen(3000, () => {
  console.log("开启本地服务----------------: http://localhost:3000");
});
