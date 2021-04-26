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
      console.log("获取用户信息 userinfo >>>>>>>>:", result);

      let data = createParams(result, 2000, "Success");

      res.json(data); // json 字符串格式
    }
  });
});

// 8.删除
router.post("/deleteuser/:id", (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      let data = createParams(result, 500, "数据库请求失败");
      res.json(data);
    } else {
      console.log(result);
      let data = createParams([], 2000, `ID：${req.params.id} 删除成功`);
      res.json(data);
    }
  });
});

// 不要忘了暴露出去
module.exports = router;
