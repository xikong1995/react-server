import React from "react";

import { StatusContext } from "@/context";

class NotFound extends React.Component {
  static contextType = StatusContext;

  render() {
    this.context && (this.context.notFound = true);

    return <div>404, Page not found!</div>;
  }
}

export default NotFound;
