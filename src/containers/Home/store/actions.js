import { CHANGE_HOME_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list,
});

export const getHomeList = () => {
  // https://www.fastmock.site/mock/d8d2dada8fc14e28ae1796fa3fddc159/ssr/api/news.json
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/news.json").then((res) => {
      const { list } = res.data;
      dispatch(changeList(list));
    });
  };
};
