import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { actions } from "./store";

// import styles from "./index.css";

class Header extends React.Component {
  render() {
    const { isLogin, handleLogin, handleLogout } = this.props;

    return (
      <ul>
        <li>
          <NavLink to="/">首页</NavLink>
        </li>
        {isLogin ? (
          <Fragment>
            <li>
              <NavLink to="/news">新闻</NavLink>
            </li>
            <li onClick={handleLogout}>退出</li>
          </Fragment>
        ) : (
          <li onClick={handleLogin}>登录</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.header.isLogin,
});

const mapStateToDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout());
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(Header);
