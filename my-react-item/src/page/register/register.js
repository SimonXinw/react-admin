import React, { useState, useEffect } from "react";
import { post } from "../../api/index";
import { message, Form, Input, Button } from "antd";
import { setCookie } from "../../utils/cookies";
import { randomLowerCase, randomNumberArr } from "../../utils/random";
import "./index.css";
const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 16,
  },
};

// ===================== 组件 ===================

const Register = (props) => {
  /**
   * @state
   */
  // let [usernameInput, setUsernameInput] = useState("");

  //   提交表单成功
  const onFinish = async (values) => {
    let params = {
      username: values.username,
      password: values.password,
    };

    // 请求 用户名数据
    let res = await post("/register", params);
    console.log("注册结果>>>>>>>>:", res);
    setTimeout(() => {
      if (res) {
        // res 结果存在时
        if (res.code === 2000) {
          message.success("注册成功");
          setCookie("token", "xwnb", 7);
          props.history.push("/login"); // 跳转登录页
        } else {
          message.error(res.msg);
        }
      } else {
        message.error("返回结果不存在");
      }
    }, 0); // 毫秒
  };
  // 1. 未输入
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
    return message.warning("用户名与密码不能为空");
  };

  /**
   * @函数状态
   */
  useEffect(() => {}, []);
  // ===================== DOM ======================
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
            <Input placeholder="Username..." value="123" onChange={(e) => {}} />
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
            <Input.Password placeholder="Password..." />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Button type="primary" htmlType="submit" block={true}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
