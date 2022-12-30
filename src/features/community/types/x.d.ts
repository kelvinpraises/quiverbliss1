interface XState {
  x: boolean;
}

interface XProvider {
  initialState: XState;
}

type XReducer = (state: XState, action: any) => XState;
