import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@/containers/Home";
import News from "@/containers/News";
import App from "@/App";

export default [
  {
    path: "/",
    element: <App />,
    loadData: App.loadData,
    key: "app",
    children: [
      {
        index: true,
        element: <Home />,
        loadData: Home.loadData,
        key: "home",
      },
      {
        path: "news",
        element: <News />,
        loadData: News.loadData,
        key: "news",
      },
    ],
  },
];

const readerRoute = (routes) => {
  return routes.map(({ children, ...props }) => (
    <Route {...props}>{children && readerRoute(children)}</Route>
  ));
};

export const readerRoutes = (routes) => {
  return <Routes>{readerRoute(routes)}</Routes>;
};
