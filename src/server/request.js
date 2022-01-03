import axios from "axios";

import { DOMAIN } from "@/constants";

export default (req) =>
  axios.create({
    baseURL: DOMAIN,
    headers: {
      cookie: req.get("cookie") || "",
    },
  });
