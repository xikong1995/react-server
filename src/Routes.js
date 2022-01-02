import React from "react";

import Home from "@/containers/Home";
import About from "@/containers/About";

export default [
  {
    path: "/",
    element: <Home />,
    loadData: Home.loadData,
    key: "home",
  },
  {
    path: "/about",
    element: <About />,
    key: "about",
  },
];
