import React from "react";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";

import { actions } from "./store";
import styles from "./index.css";

class Home extends React.Component {
  getList() {
    return this.props.list.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  render() {
    return (
      <div>
        <h2 className={styles["header-color"]}>这是首页</h2>
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

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(actions.getHomeList());
  },
});

const ExportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));

ExportHome.loadData = (store) => {
  return store.dispatch(actions.getHomeList());
};

export default ExportHome;
