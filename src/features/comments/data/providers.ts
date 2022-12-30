import { createContext, useReducer } from "react";
import { xReducer } from "./reducers";

export const XContext = createContext<any>(undefined);

export const useXProvider = ({ initialState }: XProvider) => {
  const [state, dispatch] = useReducer(xReducer, initialState);
  const value = { xState: state, xDispatch: dispatch };
  return value
};
