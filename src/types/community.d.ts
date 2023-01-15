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

/// COMMUNITY EDITOR

type ICommunityEditorReducer = (
  state: ICommunityState | undefined,
  action: ICommunityEditorAction
) => ICommunityState | undefined;

interface ICommunityEditorAction {
  type:
    | "SET_COMMUNITY"
    | "SET_CREATED_AT"
    | "SET_NAME"
    | "SET_DESCRIPTION"
    | "SET_PFP"
    | "SET_COVER_IMAGE"
    | "SET_FEATURED_VIDEO";

  payload: ICommunityEditorPayload;
}

interface ICommunityEditorPayload {
  community?: ICommunity;
  createdAt?: number;
  name?: string;
  description?: string;
  pfp?: string;
  coverImage?: string;
  featuredVideo?: FeaturedVideo;
}

/// PROJECT EDITOR

type IProjectEditorReducer = (
  state: Project | undefined,
  action: IProjectEditorAction
) => Project | undefined;

interface IProjectEditorAction {
  type:
    | "SET_PROJECT"
    | "SET_ID"
    | "SET_CREATED_AT"
    | "SET_NAME"
    | "SET_PROJECT_VIDEO"
    | "SET_ARTBOARDS"
    | "SET_ELECTION";

  payload: IProjectEditorPayload;
}

interface IProjectEditorPayload {
  project?: Project;
  id?: string;
  createdAt?: number;
  name?: string;
  projectVideo?: ProjectVideo;
  artboards?: ArtBoard[];
  election?: Election;
}
