//  1. 引入模块
const http = require("http");
// 2. 创建 http 服务
const server = http.createServer((req, res) => {
  // 3. 设置状态吗与响应头
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // 4. 设置响应 数据
  res.write("hello node");
  // 5. 这里必须结束响应
  res.end();
});

// 6. 开启一个 监听端口
server.listen(3000, () => {
  console.log("服务启动成功~");
  console.log('dir>>>>',__dirname,'file>>>>>:',__filename)
});
