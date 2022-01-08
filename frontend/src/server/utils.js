import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";

import { readerRoutes } from "@/routes";
import { ServerContext } from "@/context";

export const render = (store, routes, req, context) => {
  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));

  const App = () => {
    return (
      <StyleContext.Provider value={{ insertCss }}>
        <ServerContext.Provider value={context}>
          <Provider store={store}>
            <StaticRouter location={req.url}>
              {readerRoutes(routes)}
            </StaticRouter>
          </Provider>
        </ServerContext.Provider>
      </StyleContext.Provider>
    );
  };

  const content = ReactDOMServer.renderToString(<App />);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React服务端渲染</title>
      <link rel="stylesheet" type="text/css" href="/normalize.css">
      <style>${[...css].join("")}</style>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/app.js"></script>
    </body>
    </html>
  `;
};
