export const communityReducer: ICommunityReducer = (state, action) => {
  let newState: ICommunityState | undefined;

  switch (action.type) {
    case "SET_COMMUNITY":
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
