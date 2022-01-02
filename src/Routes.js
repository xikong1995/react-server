import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@/containers/Home";
import About from "@/containers/About";
import AboutMe from "@/containers/About/AboutMe";
import App from "@/App";

export default [
  {
    path: "/",
    element: <App />,
    key: "app",
    children: [
      {
        index: true,
        element: <Home />,
        loadData: Home.loadData,
        key: "home",
      },
      {
        path: "about",
        element: <About />,
        key: "about",
        children: [
          {
            path: "me",
            element: <AboutMe />,
            key: "aboutMe",
          },
        ],
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
