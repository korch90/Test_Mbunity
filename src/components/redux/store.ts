import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

import thunk from "redux-thunk";

import AndrianReducer from "./reducers/AndrianReducer";
import CvReducer from "./reducers/CVReducer";
import TimeReducer from "./reducers/TimeReducer"

const rootReducer = combineReducers({
  AndrianReducer,
  CvReducer,
  TimeReducer
 
});

export type AppStateType = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
