import { CHANGE_HOME_LIST } from "./constants";

const defaultState = {
  name: "noah zhou",
  newList: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...defaultState,
        newList: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
