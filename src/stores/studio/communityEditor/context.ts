import { createContext, Dispatch, useReducer } from "react";
import { communityReducer } from "./reducers";

export const useCommunityEditorValue = () => {
  const initialState = {
    name: "",
    coverImage: "",
    pfp: "",
    description: "",
    featuredVideo: {
      title: "",
      playbackId: "",
      poster: "",
    },
    projects: [
      {
        id: "",
        name: "",
        description: "",
        labels: [""],
        projectVideo: {
          title: "",
          poster: "",
          playbackId: "",
        },
        artBoards: [
          {
            id: "",
            type: "",
            name: "",
            description: "",
            url: "",
          },
        ],
        election: {
          id: "",
          title: "",
          description: "",
          questions: [
            {
              orbisRoom: "",
              question: "",
              description: "",
              options: [
                {
                  title: "",
                  value: 0,
                },
              ],
            },
          ],
        },
        createdAt: NaN,
      },
    ],
    createdAt: NaN,
  };

  const [state, dispatch] = useReducer(communityReducer, initialState);

  return { communityState: state, communityDispatch: dispatch };
};

export const CommunityEditorContext = createContext<
  ReturnType<typeof useCommunityEditorValue> | undefined
>(undefined);
