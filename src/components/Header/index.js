import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import cn from "classnames";

import { ServerContext } from "@/context";
import { actions } from "./store";
import styles from "./index.css";

const tabMap = new Map([
  ["/", "home"],
  ["/news", "news"],
]);

class Header extends React.Component {
  static contextType = ServerContext;

  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTab || "home",
    };
  }

  changeTab(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    const { isLogin, handleLogin, handleLogout, changeActiveTab } = this.props;
    let { activeTab } = this.state;
    // 服务端渲染
    if (this.context) {
      const { path } = this.context;
      activeTab = tabMap.get(path) || "home";
      changeActiveTab(activeTab);
    }

    return (
      <ul className={styles.container}>
        <li
          className={cn({
            [styles.item]: true,
            [styles.active]: activeTab === "home",
          })}
          onClick={() => {
            this.changeTab("home");
          }}
        >
          <Link to="/">首页</Link>
        </li>
        {isLogin ? (
          <Fragment>
            <li
              className={cn({
                [styles.item]: true,
                [styles.active]: activeTab === "news",
              })}
              onClick={() => {
                this.changeTab("news");
              }}
            >
              <Link to="/news">新闻</Link>
            </li>
            <li className={styles.item} onClick={handleLogout}>
              退出
            </li>
          </Fragment>
        ) : (
          <li className={styles.item} onClick={handleLogin}>
            登录
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.header.isLogin,
  activeTab: state.header.activeTab,
});

const mapStateToDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout());
  },
  changeActiveTab(activeTab) {
    dispatch(actions.changeActiveTab(activeTab));
  },
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withStyles(styles)(Header));
