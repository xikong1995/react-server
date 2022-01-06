import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";

import { actions } from "./store";
import styles from "./index.css";

class News extends React.Component {
  getList() {
    return this.props.list.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render() {
    const { isLogin } = this.props;

    return isLogin ? (
      <div className={styles.container}>
        <h2 style={{ fontSize: "20px", color: "#333" }}>这是新闻页</h2>
        <ul className={styles["list-wrapper"]}>{this.getList()}</ul>
      </div>
    ) : (
      <Navigate to="/" replace={true} />
    );
  }

  componentDidMount() {
    if (this.props.list.length) {
      return;
    }
    this.props.getNewsList();
  }
}

const mapStateToProps = (state) => ({
  list: state.news.list,
  isLogin: state.header.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  getNewsList() {
    dispatch(actions.getNewsList());
  },
});

const ExportNews = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(News));

ExportNews.loadData = (store) => {
  return store.dispatch(actions.getNewsList());
};

export default ExportNews;
