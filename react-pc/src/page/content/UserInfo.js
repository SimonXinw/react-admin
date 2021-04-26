import React, { useEffect, useState } from "react";
import { message, Layout, Breadcrumb, Table, Tag, Space, Button } from "antd";
import { getCookie } from "../../utils/cookies";
import { post } from "../../api/index";
import "./index.css";

const { Content } = Layout;

const UserInfo = (props) => {
  /**
   * @state
   */
  const [usersList, setUsersList] = useState([]);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "权限",
      key: "limit",
      dataIndex: "limit",
      render: (key) => {
        return <div>{key === "1" ? "用户" : "管理员"}</div>;
      },
    },
    {
      title: "操作",
      key: "action",
      render: (key, rowData) => {
        return (
          <div>
            <Button type="primary">修改</Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                deleteUser(rowData.id);
              }}
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  /**
   * @逻辑函数
   */

  const getUserInfo = async () => {
    let params = {};
    // 登录 查询账户数据
    let res = await post("/getuserinfo", params);
    setTimeout(() => {
      if (res) {
        // res 结果存在时
        if (res.code === 2000) {
          console.log("userinfo成功返回>>>>>>>>:", res);
          setUsersList(res.data);
        } else {
          console.log("userinfo失败返回>>>>>>>>:", res);
        }
      } else {
        console.log("userinfo  res 不存在>>>>>>>>:", res);
        message.error("获取用户列表失败!");
      }
    }, 100); // 毫秒
  };

  const deleteUser = async (id) => {
    let params = {};
    let res = await post(`/getuserinfo/deleteuser/${id}`, params);
    setTimeout(() => {
      if (res) {
        // res 结果存在时
        if (res.code === 2000) {
          console.log("deleteuser成功返回>>>>>>>>:", res);
          message.success(res.msg);
          getUserInfo();
        } else {
          console.log("udeleteuser失败返回>>>>>>>>:", res);
          message.error("删除失败!");
        }
      } else {
        console.log("deleteuser  res 不存在>>>>>>>>:", res);
        message.error(res.msg);
      }
    }, 100); // 毫秒
  };
  // 渲染
  useEffect(() => {
    getUserInfo();
    console.log("用户信息列表>>>>>>>>>>>:");
  }, []);

  // ============ 渲染DOM ==============

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>UserInfo</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 20,
          margin: 0,
          background: "#fff",
          overflowY: "auto",
        }}
      >
        <Table columns={columns} dataSource={usersList} />
      </Content>
    </Layout>
  );
};

export default UserInfo;
