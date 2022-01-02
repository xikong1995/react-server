import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { getClientStore } from "@/store";
import routes, { readerRoutes } from "@/routes";

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{readerRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
