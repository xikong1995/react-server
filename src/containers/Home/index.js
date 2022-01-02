import React from "react";
import { connect } from "react-redux";

import { getHomeList } from "./store/actions";

class Home extends React.Component {
  getList() {
    return this.props.list.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render() {
    return (
      <div>
        <div style={{ color: "red" }}>Hello {this.props.name}</div>
        <button onClick={() => alert("hello world")}>点我</button>
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
  return store.dispatch(getHomeList());
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.newList,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
