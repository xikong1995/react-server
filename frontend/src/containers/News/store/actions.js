import { CHANGE_NEWS_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_NEWS_LIST,
  list,
});

export const getNewsList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/news").then((res) => {
      dispatch(changeList(res.data));
    });
  };
};
