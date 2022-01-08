import { CHANGE_HOME_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/hots").then((res) => {
      dispatch(changeList(res.data));
    });
  };
};
