import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";

import { getClientStore } from "@/store";
import routes, { readerRoutes } from "@/routes";

const store = getClientStore();

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

const App = () => {
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <BrowserRouter>{readerRoutes(routes)}</BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
