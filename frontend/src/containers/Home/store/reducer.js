import { CHANGE_HOME_LIST } from "./constants";

const defaultState = {
  list: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...defaultState,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
