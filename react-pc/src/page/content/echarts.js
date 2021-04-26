import React, { useEffect } from "react";

import { Layout, Breadcrumb, Button } from "antd";
import EchartsTest from "../../components/echarts";

import { getCookie } from "../../utils/cookies";
import "./index.css";

const { Content } = Layout;

const Echarts = (props) => {
  /**
   * @逻辑函数
   */

  // ============ 渲染DOM ==============
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Goods</Breadcrumb.Item>
        <Breadcrumb.Item>Echarts</Breadcrumb.Item>
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
        <Button type="primary" style={{ margin: 20 }} onClick={() => {}}>
          图表按钮
        </Button>
        <EchartsTest />
      </Content>
    </Layout>
  );
};

export default Echarts;
