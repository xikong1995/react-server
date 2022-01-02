import express from "express";
import proxy from "express-http-proxy";
import { matchPath } from "react-router-dom";

import { getStore } from "@/store";
import routeMap from "@/routes";
import { render } from "./utils";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(
  "/api",
  proxy("https://www.fastmock.site", {
    proxyReqPathResolver(req) {
      return `/mock/d8d2dada8fc14e28ae1796fa3fddc159/ssr/api${req.url}`;
    },
  })
);

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
