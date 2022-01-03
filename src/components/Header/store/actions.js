import { CHANGE_LOGIN } from "./constants";

const changeLogin = (isLogin) => ({
  type: CHANGE_LOGIN,
  isLogin,
});

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/isLogin").then((res) => {
      const { isLogin } = res.data;
      dispatch(changeLogin(isLogin));
    });
  };
};

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/login").then(() => {
      dispatch(changeLogin(true));
    });
  };
};

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/logout").then(() => {
      dispatch(changeLogin(false));
    });
  };
};
