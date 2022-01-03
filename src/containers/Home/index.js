import React from "react";
import { connect } from "react-redux";

import { actions } from "./store";

class Home extends React.Component {
  getList() {
    return this.props.list.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render() {
    return (
      <div>
        <h2>这是首页</h2>
        <ul>{this.getList()}</ul>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.list.length) {
      return;
    }
    this.props.getHomeList();
  }
}

Home.loadData = (store) => {
  return store.dispatch(actions.getHomeList());
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(actions.getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
