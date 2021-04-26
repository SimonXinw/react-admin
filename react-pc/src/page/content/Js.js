import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Button, Input } from "antd";
import { getCookie, removeCookie } from "../../utils/cookies";
import { request } from "../../api/request";
import "./index.css";

const { Content } = Layout;

const Js = (props) => {
  /**
   * @逻辑函数
   */

  // 执行 await
  const http = async () => {
    try {
      let res = await request();
      console.log("第一次 await", res);
    } catch (err) {
      console.log("try catch 抓取的错误>>>>>>>>>>>>>>>>>:", err);
    } finally {
      console.log("最后都要执行");
    }
  };
  // 1. 检查是否有账号密码 不然重新登录

  useEffect(() => {
    console.log("Js, 组件加载成功");
  });
  // ============ 渲染DOM ==============
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Js</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: "#fff",
        }}
      >
        {/* 内容 */}
        <Button type="primary" onClick={http}>
          执行Promise
        </Button>
      </Content>
    </Layout>
  );
};
export default Js;
