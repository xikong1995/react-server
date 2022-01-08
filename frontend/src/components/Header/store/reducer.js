import { CHANGE_LOGIN, CHANGE_ACTIVE_TAB } from "./constants";

const defaultState = {
  isLogin: false,
  activeTab: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
    default:
      return state;
  }
};
