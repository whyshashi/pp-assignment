import { createStore } from "redux";
import { flightReducer } from "./reducer";

export const configureStore = () => {
  return createStore(flightReducer);
};
