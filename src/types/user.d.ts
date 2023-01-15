interface IUser {
  loggedIn: boolean;
  isCommunityProfile: boolean;
}

type IUserReducer = (
  state: IUser | undefined,
  action: IUserAction
) => IUser | undefined;

interface IUserAction {
  type: "SET_LOGIN" | "IS_COMMUNITY_PROFILE";
  payload: IUserPayload;
}

interface IUserPayload {
  loggedIn?: boolean;
  isCommunityProfile?: boolean;
}