import React from "react";
import {
  Route,
  Switch,
  HashRouter as Router,
  Redirect,
} from "react-router-dom";
import { getCookie } from "./utils/cookies";
// 页面
import Home from "./Home";
import Login from "./page/login/login";
import Register from "./page/register/register";
// 公共组件
import NoToken from "./components/NoToken";

const RouterConfig = (props) => {
  // DOM
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route
          path="/home"
          render={(props) =>
            getCookie("token") ? <Home {...props} /> : <NoToken {...props} />
          }
        ></Route>
        <Redirect path="/" to="/home" />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
