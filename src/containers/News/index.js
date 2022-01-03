import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { actions } from "./store";

class News extends React.Component {
  getList() {
    return this.props.list.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render() {
    const { isLogin } = this.props;

    return isLogin ? (
      <div>
        <h2>这是新闻页</h2>
        <ul>{this.getList()}</ul>
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

News.loadData = (store) => {
  return store.dispatch(actions.getNewsList());
};

const mapStateToProps = (state) => ({
  list: state.news.list,
  isLogin: state.header.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  getNewsList() {
    dispatch(actions.getNewsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
