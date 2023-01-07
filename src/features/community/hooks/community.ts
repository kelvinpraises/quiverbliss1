import { useCallback } from "react";
import { communityActions } from "../../../stores/community/actions";
import { useCommunityContext } from "../../../stores/community/context";
import exp from "../../../data/exp.json";

const useCommunity = () => {
  const { communityState, communityDispatch } = useCommunityContext();

  const init = useCallback(() => {
    // get did from url
    // fetch community from orbis and quiverbliss
    // set community

    const community = JSON.parse(JSON.stringify(exp)) as Quiverbliss;

    console.log(community);

    communityDispatch({
      type: communityActions.SET_COMMUNITY,
      payload: {
        community: {
          name: "dreampiper",
          coverImage:
            "http://localhost:5500/public/images/548256E1-BC17-4449-AE60-9E570E518142.jpg",
          pfp: "http://localhost:5500/public/images/dreamy.png",
          description:
            "A design platform for teams who build products together",
          ...community,
          featuredVideo: {
            title: "",
            playbackId:
              "bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy",
            poster: "http://localhost:5500/public/images/blender-poster.jpg",
          },
          projects: [...community.projects],
        },
      },
    });
  }, []);

  const getCommunityCover = useCallback(() => {
    if (communityState) {
      const src = communityState.coverImage;
      const alt = communityState.name;
      return { src, alt };
    }
  }, [communityState]);

  const getCommunityAvatar = useCallback(() => {
    if (communityState) {
      const src = communityState.pfp;
      const alt = communityState.name;
      return { src, alt };
    }
  }, [communityState]);

  const getCommunityIntro = useCallback(() => {
    if (communityState) {
      const videoProps = communityState.featuredVideo;

      const bioProps = {
        name: communityState.name,
        description: communityState.description,
      };

      return { videoProps, bioProps };
    }
  }, [communityState]);

  const getCommunityProjects = useCallback(() => {
    if (communityState) {
      return communityState.projects.map((p) => {
        const projects = {
          previewImage: p.projectVideo.poster,
          name: p.name,
          labels: p.labels,
          id: p.id,
        };

        return projects;
      });
    }
  }, [communityState]);

  return {
    init,
    getCommunityCover,
    getCommunityAvatar,
    getCommunityIntro,
    getCommunityProjects,
  };
};

export default useCommunity;
