import { fetchService } from "@services/fetchService";

const data = fetchService();

const useCommunity = () => {
  const community = data.communityData.read() as ICommunity;

  const getCommunityCover = () => {
    return {
      src: community.coverImage,
      alt: community.name,
    };
  };

  const getCommunityAvatar = () => {
    return {
      src: community.pfp,
      alt: community.name,
    };
  };

  const getCommunityIntro = () => {
    return {
      videoProps: community.featuredVideo,
      bioProps: {
        name: community.name,
        description: community.description,
      },
    };
  };

  const getCommunityProjects = () => {
    return community.projects.map((p) => {
      return {
        previewImage: p.projectVideo.poster,
        name: p.name,
        labels: p.labels,
        id: p.id,
      };
    });
  };

  return {
    getCommunityCover,
    getCommunityAvatar,
    getCommunityIntro,
    getCommunityProjects,
  };
};

export default useCommunity;
