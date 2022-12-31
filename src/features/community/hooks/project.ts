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

  const getProjectLabels = useMemo(() => {
    return ["voting", "on-chain", "feedback"];
  }, []);

  const getArtBoardsUrl = useMemo(() => {
    return [
      "https://www.figma.com/embed?embed_host=fastma&community_viewer=true&hub_file_id=1184024370301235727",
      "figma",
      "figma",
    ];
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
