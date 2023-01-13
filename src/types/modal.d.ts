interface ModalState {
  showWelcome: boolean;
}

interface ModalProvider {
  initialState: ModalState;
}

type ModalReducer = (state: ModalState, action: any) => ModalState;
