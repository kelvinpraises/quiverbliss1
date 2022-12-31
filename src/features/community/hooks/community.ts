import { useMemo } from "react";

const useCommunity = () => {
  useMemo(() => {
    // throw new Error("were wolfs");
  }, []);

  const getCommunityCover = useMemo(() => {
    const src =
      "http://localhost:5500/public/images/548256E1-BC17-4449-AE60-9E570E518142.jpg";
    const alt = "";
    return { src, alt };
  }, []);

  const getCommunityAvatar = useMemo(() => {
    const src = "http://localhost:5500/public/images/dreamy.png";
    const alt = "";
    return { src, alt };
  }, []);

  const getCommunityIntro = useMemo(() => {
    const videoProps = {
      title: "Waterfalls",
      playbackId: "bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy",
      showTitle: false,
      poster: "http://localhost:5500/public/images/blender-poster.jpg",
    };

    const bioProps = {
      name: "dreampiper",
      description: "A design platform for teams who build products together",
    };

    return { videoProps, bioProps };
  }, []);

  const getCommunityProjects = useMemo(() => {
    return [
      {
        previewImage: "http://localhost:5500/public/images/dreamy.png",
        title: "Designs for Orbis Hackathon Orbis Hackathon!",
        labels: ["voting", "feedback", "feedback", "feedback"],
        id: "heaven",
        parentId: "s",
      },
      {
        previewImage:
          "http://localhost:5500/public/images/548256E1-BC17-4449-AE60-9E570E518142.jpg",
        title: "Quiverbliss vote now",
        labels: ["voting", "on-chain"],
        id: "dreampiper",
        parentId: "s",
      },
      {
        previewImage: "http://localhost:5500/public/images/dreamy.png",
        title: "Seraph",
        labels: ["on-chain", "feedback"],
        id: "heaven",
        parentId: "s",
      },
    ];
  }, []);

  return {
    getCommunityCover,
    getCommunityAvatar,
    getCommunityIntro,
    getCommunityProjects,
  };
};

export default useCommunity;
