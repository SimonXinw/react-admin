import React, { useEffect } from "react";

import { Layout, Breadcrumb } from "antd";

import { getCookie } from "../../utils/cookies";
import "./index.css";

const { Content } = Layout;

const Form = (props) => {
  /**
   * @逻辑函数
   */

  // ============ 渲染DOM ==============

  const Title = (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Form</Breadcrumb.Item>
    </Breadcrumb>
  );

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      {Title}
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: "#fff",
        }}
      >
        你好！
      </Content>
    </Layout>
  );
};

export default Form;
