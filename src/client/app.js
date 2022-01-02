import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { getClientStore } from "@/store";
import routeMap from "@/routes";

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routeMap.map((item) => (
            <Route {...item} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
