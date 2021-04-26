import React, { useState } from "react";
import { Link, Route, Switch, HashRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeCookie } from "./utils/cookies";
// 页面组件
import Js from "./page/content/Js";
import Echarts from "./page/content/echarts";
import Form from "./page/content/form";
import ReduxData from "./page/content/reduxdata";
import UserInfo from "./page/content/UserInfo";

import "./App.css";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const Home = (props) => {
  const loginOut = () => {
    removeCookie("token");
    window.location.reload();
  };
  // ============ 渲染DOM ==============
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" onClick={loginOut}>
              退出
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="个人中心">
                <Menu.Item key="1">
                  <Link to={{ pathname: "/home" }}>原生js代码</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={{ pathname: "/home/echarts" }}>Echarts</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to={{ pathname: "/home/form" }}>表单验证</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to={{ pathname: "/home/reduxdata" }}>redux</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to={{ pathname: "/home/userinfo" }}>管理用户</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {/* 同级页面 */}

          {/* <content props={props} />
          <Echarts props={props} /> */}
          <HashRouter>
            <Switch>
              <Route path="/home/reduxdata" component={ReduxData}></Route>
              <Route path="/home/userinfo" component={UserInfo}></Route>
              <Route path="/home/form" component={Form}></Route>
              <Route path="/home/echarts" component={Echarts}></Route>
              <Route path="/home" component={Js}></Route>
            </Switch>
          </HashRouter>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
