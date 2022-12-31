import { useMemo } from "react";

const useCommunities = () => {
  const getCommunities = useMemo(() => {
    return [
      {
        avatar:
          "http://localhost:5500/public/images/548256E1-BC17-4449-AE60-9E570E518142.jpg",
        name: "Dreampiper",
        location: "Worldwide",
        id: "dreampiper",
      },
      {
        avatar: "http://localhost:5500/public/images/dreamy.png",
        name: "Seraph",
        location: "Heaven",
        id: "heaven",
      },
    ];
  }, []);

  return {
    getCommunities,
  };
};

export default useCommunities;