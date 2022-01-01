import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import Routes from "../Routes";

export const render = (req) => {
  const content = renderToString(
    <StaticRouter location={req.url}>{Routes}</StaticRouter>
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/app.js"></script>
    </body>
    </html>
  `;
};
