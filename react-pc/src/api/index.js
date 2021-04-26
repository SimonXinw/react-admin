import axios from "axios";
import qs from "qs";

const ConfigBaseUrl = "http://localhost:3000";
// 创建 axios 实例
let Axios = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: ConfigBaseUrl, // 基础请求
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});

// 默认参数
Axios.defaults.headers["token"] = "123456";

// GET
export function get(url) {
  return Axios({
    method: "GET",
    url: url,
  });
}

// POST
export async function post(url, params) {
  console.log("请求参数", params);
  let res = await Axios({
    method: "POST",
    url: url,
    data: qs.stringify(params),
  });
  return res && res.data;
}
