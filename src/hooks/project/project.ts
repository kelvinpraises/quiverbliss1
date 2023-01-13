import { fetchService } from "@services/fetchService";

const data = fetchService();

const useProject = () => {
  const community = data.communityData.read() as ICommunity;
  const projectId = "";

  const getProjectIntro = () => {
    const project = community.projects.find((p) => {
      return p.id === projectId;
    });

    if (typeof project === "undefined") return;

    return {
      videoProps: {
        title: project.projectVideo.title,
        playbackId: project?.projectVideo.playbackId,
        showTitle: true,
        poster: project?.projectVideo.poster,
      },
      bioProps: {
        avatar: community.pfp,
        title: project.name,
        name: community.name,
        description: project.description,
      },
    };
  };

  const getProjectLabels = () => {
    const project = community.projects.find((p) => {
      return p.id === projectId;
    });

    if (typeof project === "undefined") return;

    return project?.labels;
  };

  const getArtBoardsInfo = () => {
    const project = community.projects.find((p) => {
      return p.id === projectId;
    });

    if (typeof project === "undefined") return;

    return project?.artBoards;
  };

  const setVote = () => {
    throw new Error("Function not implemented.");
  };

  const setSubmission = () => {
    throw new Error("Function not implemented.");
  };

  return {
    getProjectIntro,
    getProjectLabels,
    getArtBoardsInfo,
    setVote,
    setSubmission,
  };
};

export default useProject;
