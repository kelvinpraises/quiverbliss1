export const userReducer: IUserReducer = (state, action) => {
  let newState: IUser | undefined;

  switch (action.type) {
    case "SET_LOGIN":
      newState = {
        ...state!,
        loggedIn: action.payload.loggedIn!,
      };
      break;

    case "IS_COMMUNITY_PROFILE":
      newState = {
        ...state!,
        isCommunityProfile: action.payload.loggedIn!,
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
