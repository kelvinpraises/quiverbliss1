interface ICommunitiesState {
  communities: ICommunity[];
}

type ICommunitiesReducer = (
  state: ICommunitiesState,
  action: ICommunitiesAction
) => ICommunitiesState;

interface ICommunitiesProvider {
  initialState: ICommunitiesState;
}

interface ICommunitiesAction {
  type: any;
  payload: ICommunitiesPayload;
}

interface ICommunitiesPayload {
  communities: ICommunity[];
}

interface ICommunities {
  avatar: string;
  name: string;
  location: string;
  id: string;
}
