import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import { StatusContext } from "@/context";
import styles from "./index.css";

class NotFound extends React.Component {
  static contextType = StatusContext;

  render() {
    this.context && (this.context.notFound = true);

    return <div className={styles.text}>404, Page not found!</div>;
  }
}

export default withStyles(styles)(NotFound);
