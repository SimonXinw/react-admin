// cors 跨域解决
const cors = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //允许的来源
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Token"); //请求的头部
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //允许请求的方法
  next();
};

module.exports = { cors };
