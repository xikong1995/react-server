import express from "express";
import { getStore } from "@/store";
import { matchPath } from "react-router-dom";

import routeMap from "@/routes";
import { render } from "./utils";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = getStore();
  // TODO: 支持嵌套路由
  const promises = [];
  routeMap.some((item) => {
    const match = matchPath(item, req.url);
    if (match && item.loadData) {
      promises.push(item.loadData(store));
    }
    return match;
  });
  Promise.all(promises).then(() => {
    res.send(render(store, routeMap, req));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
