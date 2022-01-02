import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-dom";

import { getStore } from "@/store";
import routes from "@/routes";
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

  const promises = [];
  const matchedRoutes = matchRoutes(routes, req.url);
  if (matchedRoutes) {
    matchedRoutes.forEach(({ route }) => {
      if (route.loadData) {
        promises.push(route.loadData(store));
      }
    });
  }

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
