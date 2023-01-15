export const communityReducer: ICommunityEditorReducer = (state, action) => {
  let newState: ICommunityState | undefined;

  switch (action.type) {
    case "SET_COMMUNITY":
      newState = {
        ...action.payload.community!,
      };
      break;

    case "SET_CREATED_AT":
      newState = {
        ...state!,
        createdAt: action.payload.createdAt!,
      };
      break;

    case "SET_NAME":
      newState = {
        ...state!,
        name: action.payload.name!,
      };
      break;

    case "SET_DESCRIPTION":
      newState = {
        ...state!,
        description: action.payload.description!,
      };
      break;

    case "SET_PFP":
      newState = {
        ...state!,
        pfp: action.payload.pfp!,
      };
      break;

    case "SET_COVER_IMAGE":
      newState = {
        ...state!,
        coverImage: action.payload.coverImage!,
      };
      break;

    case "SET_FEATURED_VIDEO":
      newState = {
        ...state!,
        featuredVideo: action.payload.featuredVideo!,
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
