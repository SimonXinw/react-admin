// routes/search.js
const express = require("express");
const router = express.Router();
const db = require("../db.js");
const { createParams } = require("../utils.js");
const moment = require("moment");

/**
 * @函数方法
 */

// 监听注册路由
router.post("/", (req, res) => {
  let sql = `SELECT * FROM users`; // 1 - 查询数据库是否有该用户
  // 操作数据库 方法
  db.query(sql, (err, result) => {
    if (err) {
      // 数据库错误........
      let data = createParams(result, 500, "数据库请求失败");
      console.log("数据库请求失败>>>>>>>>>>>:");
      res.json(data);
    } else {
      // 数据库请求成功处理逻辑........
      let { username, password } = req.body;
      let isExit = false; // false 用户名不存在   true 用户名存在
      let data;

      console.log("users>>>>>>>>:", req.body);
      // 判断用户名密码是否存在
      result.forEach((item, index) => {
        if (item.username === username) {
          // 用户名已经存在
          isExit = true;
          return;
        }
      });
      if (isExit) {
        // 用户存在
        data = createParams([], -1, "用户名已存在!");
        res.json(data); // json 字符串格式
      } else {
        // 用户不存在 进行注册
        let params = {
          username,
          password,
          limit: 1,
          date: moment().format("YYYY-MM-DD"),
        };
        let sql = "INSERT INTO users SET ?";
        db.query(sql, params, (err, result) => {
          if (err) {
            console.log(err);
            data = createParams([], -1, "注册失败");
            res.json(data); // json 字符串格式
          } else {
            console.log(result);
            data = createParams([], 2000, "注册成功");
            res.json(data); // json 字符串格式
          }
        });
      }
    }
  });
});

// 不要忘了暴露出去
module.exports = router;
