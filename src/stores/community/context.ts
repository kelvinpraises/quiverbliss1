import { createContext, Dispatch, useContext, useReducer } from "react";
import { communityReducer } from "./reducers";

export const CommunityContext = createContext<any>(undefined);

export const useCommunityValue = ({ initialState }: ICommunityProvider) => {
  const [state, dispatch] = useReducer(communityReducer, initialState);

  const value = { communityState: state, communityDispatch: dispatch };

  return value;
};

export const useCommunityContext = () => {
  const { communityState, communityDispatch } = useContext(
    CommunityContext
  ) as {
    communityState: ICommunityState;
    communityDispatch: Dispatch<ICommunityAction>;
  };

  return { communityState, communityDispatch };
};
