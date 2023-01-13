import { fetchService } from "@services/fetchService";

const data = fetchService();

const useCommunities = () => {
  const communities = data.communitiesData.read() as ICommunities;

  return {
    communities,
  };
};

export default useCommunities;
