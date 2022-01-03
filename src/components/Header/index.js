import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { actions } from "./store";

// import styles from "./index.css";

class Header extends React.Component {
  render() {
    const { isLogin, handleLogin, handleLogout } = this.props;

    return (
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        {isLogin ? (
          <Fragment>
            <li>
              <Link to="/news">新闻</Link>
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
