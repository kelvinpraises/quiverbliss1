import { useCallback } from "react";
import { useCommunityContext } from "../../../stores/community/context";

const useProject = () => {
  const { communityState, communityDispatch } = useCommunityContext();
  const projectId = "";

  const getProjectIntro = useCallback(() => {
    let videoProps;
    let bioProps;

    const project = communityState.projects.find((p) => p.id === projectId);
    if (typeof project !== undefined) {
      videoProps = {
        title: project?.projectVideo.title,
        playbackId: project?.projectVideo.playbackId,
        showTitle: true,
        poster: project?.projectVideo.poster,
      };

      bioProps = {
        name: communityState.name,
        description: communityState.description,
      };
    }

    return { videoProps, bioProps };
  }, [communityState]);

  const getProjectLabels = useCallback(() => {
    let labels;

    const project = communityState.projects.find((p) => p.id === projectId);
    if (typeof project !== undefined) {
      labels = project?.labels;
    }

    return labels;
  }, []);

  const getArtBoardsUrl = useCallback(() => {
    let artBoards;

    const project = communityState.projects.find((p) => p.id === projectId);
    if (typeof project !== undefined) {
      artBoards = project?.artBoards.map((a) => a.url);
    }

    return artBoards;
  }, []);

  const setVote = () => {
    throw new Error("Function not implemented.");
  };

  const setSubmission = () => {
    throw new Error("Function not implemented.");
  };

  return {
    getProjectIntro,
    getProjectLabels,
    getArtBoardsUrl,
    setVote,
    setSubmission,
  };
};

export default useProject;
