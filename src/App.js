import React from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import { actions } from "@/components/Header/store";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo());
};

export default App;
