interface ICommunity extends Quiverbliss {
  name: string;
  coverImage: string;
  pfp: string;
  description: string;
}

interface ICommunityState extends ICommunity {}

type ICommunityReducer = (
  state: ICommunityState | undefined,
  action: ICommunityAction
) => ICommunityState | undefined;

interface ICommunityAction {
  type: "SET_COMMUNITY";
  payload: ICommunityPayload;
}

interface ICommunityPayload {
  community: ICommunityState;
}
