// routes/search.js
const express = require("express");
const router = express.Router();
const db = require("../db.js");
const { createParams } = require("../utils.js");

// 1. 查询 all
router.post("/", (req, res) => {
  let sql = `SELECT * FROM users`;
  db.query(sql, (err, result) => {
    if (err) {
      let data = createParams(result, 500, "数据库请求失败");
      res.json(data);
    } else {
      // 数据库请求成功处理逻辑........
      let { username, password } = req.body;
      let isLogin = -1; // -1 不存在 0 存在，密码错误 1登录
      console.log("注册用户 users >>>>>>>>:", req.body);
      // 判断用户名密码是否存在
      result.forEach((item, index) => {
        if (item.username === username) {
          isLogin = 0;
          if (item.password === password) {
            isLogin = 1;
          }
        }
      });
      let data;
      if (isLogin === -1) {
        data = createParams([], -1, "用户不存在");
      }
      if (isLogin === 0) {
        data = createParams([], -1, "密码错误");
      }
      if (isLogin === 1) {
        data = createParams([], 2000, "登录成功");
      }

      res.json(data); // json 字符串格式
    }
  });
});

// 不要忘了暴露出去
module.exports = router;
