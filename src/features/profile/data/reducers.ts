import { xActions } from "./actions";

export const xReducer: XReducer = (state, action) => {
  let newState: XState;

  switch (action.type) {
    case xActions.Z:
      newState = {
        ...state,
        x: true,
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
