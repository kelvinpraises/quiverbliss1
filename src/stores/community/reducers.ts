import { communityActions } from "./actions";

export const communityReducer: ICommunityReducer = (state, action) => {
  let newState: ICommunityState;

  switch (action.type) {
    case communityActions.SET_COMMUNITY:
      newState = {
        ...action.payload.community,
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
