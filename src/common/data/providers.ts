import { createContext, useReducer } from "react";
import { modalReducer } from "./reducers";

export const ModalContext = createContext<any>(undefined);

export const useModalProvider = ({ initialState }: ModalProvider) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const value = { modalState: state, modalDispatch: dispatch };
  return value
};
