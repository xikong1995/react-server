import { CHANGE_LOGIN } from "./constants";

const defaultState = {
  isLogin: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
};
