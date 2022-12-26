import { modalActions } from "./actions";

export const modalReducer: ModalReducer = (state, action) => {
  let newState: ModalState;

  switch (action.type) {
    case modalActions.OPEN_WELCOME_MODAL:
      newState = {
        ...state,
        showWelcome: true,
      };
      break;

    case modalActions.CLOSE_WELCOME_MODAL:
      newState = {
        ...state,
        showWelcome: false,
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};
