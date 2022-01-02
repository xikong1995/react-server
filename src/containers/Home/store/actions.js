import axios from "axios";

import { CHANGE_HOME_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    return axios
      .get(
        "https://www.fastmock.site/mock/d8d2dada8fc14e28ae1796fa3fddc159/ssr/api/news.json"
      )
      .then((res) => {
        const { list } = res.data;
        dispatch(changeList(list));
      });
  };
};
