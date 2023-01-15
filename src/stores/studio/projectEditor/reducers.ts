export const projectReducer: IProjectEditorReducer = (state, action) => {
  let newState: Project | undefined;

  switch (action.type) {
    case "SET_PROJECT":
      newState = {
        ...action.payload.project!,
      };
      break;

    case "SET_ID":
      newState = {
        ...state!,
        id: action.payload.id!,
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

    case "SET_PROJECT_VIDEO":
      newState = {
        ...state!,
        projectVideo: action.payload.projectVideo!,
      };
      break;

    case "SET_ARTBOARDS":
      newState = {
        ...state!,
        artBoards: action.payload.artboards!,
      };
      break;

    case "SET_ELECTION":
      newState = {
        ...state!,
        election: action.payload.election!,
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
