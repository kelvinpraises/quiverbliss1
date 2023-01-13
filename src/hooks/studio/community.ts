import { useCallback, useContext } from "react";

import { CommunityContext } from "@stores/community/context";

const useCommunityStudio = () => {
  const { communityState, communityDispatch } = useContext(CommunityContext)!;

  const getCommunityCover = useCallback(() => {
    if (typeof communityState === "undefined") return;

    const src = communityState.coverImage;
    const alt = communityState.name;
    return { src, alt };
  }, [communityState]);

  const getCommunityAvatar = useCallback(() => {
    if (typeof communityState === "undefined") return;

    const src = communityState.pfp;
    const alt = communityState.name;
    return { src, alt };
  }, [communityState]);

  const getCommunityIntro = useCallback(() => {
    if (typeof communityState === "undefined") return;

    const videoProps = communityState.featuredVideo;

    const bioProps = {
      name: communityState.name,
      description: communityState.description,
    };

    return { videoProps, bioProps };
  }, [communityState]);

  const getCommunityProjects = useCallback(() => {
    if (typeof communityState === "undefined") return;

    return communityState.projects.map((p) => {
      const projects = {
        previewImage: p.projectVideo.poster,
        name: p.name,
        labels: p.labels,
        id: p.id,
      };

      return projects;
    });
  }, [communityState]);

  return {
    getCommunityCover,
    getCommunityAvatar,
    getCommunityIntro,
    getCommunityProjects,
  };
};

export default useCommunityStudio;