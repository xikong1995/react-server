import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as headerReducer } from "@/components/Header/store";
import { reducer as homeReducer } from "@/containers/Home/store";
import { reducer as newReducer } from "@/containers/News/store";
import clientAxios from "@/client/request";
import createAxios from "@/server/request";

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  news: newReducer,
});

export const getStore = (req) => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(createAxios(req)))
  );
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
