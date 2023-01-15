import { createContext, Dispatch, useReducer } from "react";
import { userReducer } from "./reducers";

export const useUserValue = () => {
  const initialState = {
    loggedIn: true,
    isCommunityProfile: true,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return { userState: state, userDispatch: dispatch };
};

export const UserContext = createContext<
  ReturnType<typeof useUserValue> | undefined
>(undefined);
