import React from "react";
import { Button } from "antd";

const NoToken = (props) => {
  let style = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    color: "#666",
  };
  return (
    <div style={style}>
      <div>无访问权限</div>
      <Button
        type="primary"
        size="large"
        style={{ width: 100, marginTop: "15px" }}
        onClick={() => {
          props.history.push("/login");
        }}
      >
        登录
      </Button>
    </div>
  );
};

export default NoToken;
