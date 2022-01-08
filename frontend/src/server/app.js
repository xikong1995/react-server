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
        // 容错处理，即使某一个请求失败了，不会影响其他请求
        const promise = new Promise((resolve) => {
          route.loadData(store).then(
            (res) => {
              resolve(res);
            },
            (err) => {
              resolve(err);
            }
          );
        });
        promises.push(promise);
      }
    });
  }
  Promise.all(promises).then(() => {
    const context = {
      notFound: false,
      path: req.path,
    };
    const html = render(store, routes, req, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
