interface ICommunity extends Quiverbliss {
  name: string;
  coverImage: string;
  pfp: string;
  description: string;
}

interface ICommunityState extends ICommunity {}

type ICommunityReducer = (
  state: ICommunityState,
  action: ICommunityAction
) => ICommunityState;

interface ICommunityProvider {
  initialState: ICommunityState;
}

interface ICommunityAction {
  type: any;
  payload: ICommunityPayload;
}

interface ICommunityPayload {
  community: ICommunityState;
}
