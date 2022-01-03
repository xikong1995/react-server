import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-dom";

import { getStore } from "@/store";
import routes from "@/routes";
import { DOMAIN } from "@/constants";
import { render } from "./utils";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(
  "/api",
  proxy(DOMAIN, {
    proxyReqPathResolver(req) {
      return `/api${req.url}`;
    },
  })
);

app.get("*", (req, res) => {
  const store = getStore(req);
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
