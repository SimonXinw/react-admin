import React, { useState } from "react";
import { post } from "../../api/index";
import { message, Form, Input, Button, Checkbox } from "antd";
import { setCookie } from "../../utils/cookies";
// CSS
import "./index.css";
const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 16,
  },
};

// ===================== 组件 ===================

function Login(props) {
  const [loading, setLoading] = useState(false);

  // 1  登录校验
  const onFinish = async (values) => {
    let { username, password } = values;
    let params = {
      username,
      password,
    };
    // 登录 查询账户数据
    let res = await post("/login", params);
    console.log("登录成功返回>>>>>>>>:", res);
    setTimeout(() => {
      if (res) {
        // res 结果存在时
        if (res.code === 2000) {
          message.success("登录成功");
          setCookie("token", "xwnb", 7);
          props.history.push("/home"); // 跳转主页
        } else {
          message.error(res.msg);
        }
      } else {
        message.error("返回结果不存在");
      }
    }, 666); // 毫秒
  };

  // 1. 未输入
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
    return message.warning("用户名与密码不能为空");
  };

  // ======================== 虚拟 DOM ====================
  return (
    <div className="page-login">
      <div className="login-box">
        <Form
          layout="vertical"
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            maxLength={11}
            rules={[
              {
                required: true,
                message: "用户名不能为空!",
              },
            ]}
          >
            <Input
              placeholder="Username..."
              style={{ width: 250 }}
              value="123"
              onChange={(e) => {}}
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            maxLength={11}
            rules={[
              {
                required: true,
                message: "密码不能为空!",
              },
            ]}
          >
            <Input.Password placeholder="Password..." style={{ width: 250 }} />
          </Form.Item>

          <Button
            name="login"
            type="primary"
            htmlType="submit"
            style={{ marginRight: 20 }}
          >
            登录
          </Button>
          <Button
            name="register"
            type="primary"
            style={{ marginRight: 20 }}
            onClick={(e) => {
              console.log(props);
              props.history.push("/register");
            }}
          >
            注册
          </Button>
          <Checkbox>记住密码</Checkbox>
        </Form>
      </div>
    </div>
  );
}

export default Login;
