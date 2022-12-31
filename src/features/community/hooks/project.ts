import { useMemo } from "react";

const useProject = () => {
  const getProjectIntro = useMemo(() => {
    const videoProps = {
      title: "Waterfalls",
      playbackId: "bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy",
      showTitle: true,
      poster: "http://localhost:5500/public/images/blender-poster.jpg",
    };

    const bioProps = {
      name: "dreampiper",
      description: "A design platform for teams who build products together",
    };

    return { videoProps, bioProps };
  }, []);

  const getProjectLabels = () => {
    throw new Error("Function not implemented.");
  };

  const getArtBoards = () => {
    throw new Error("Function not implemented.");
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
    getArtBoards,
    setVote,
    setSubmission,
  };
};

export default useProject;
