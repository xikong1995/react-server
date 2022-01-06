import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import { ServerContext } from "@/context";
import styles from "./index.css";

class NotFound extends React.Component {
  static contextType = ServerContext;

  render() {
    this.context && (this.context.notFound = true);

    return (
      <div className={styles.container}>
        <p className={styles.text}>404, Page not found!</p>
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);
