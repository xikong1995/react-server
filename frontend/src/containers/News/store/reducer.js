import { CHANGE_NEWS_LIST } from "./constants";

const defaultState = {
  list: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_NEWS_LIST:
      return {
        ...defaultState,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
