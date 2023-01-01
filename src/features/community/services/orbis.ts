/* eslint-disable */
// @ts-ignore
import { Orbis } from "@orbisclub/orbis-sdk";
/* eslint-enable */

let orbis = new Orbis();

const authentication = () => {
  const setFollow = async (did: string) => {
    await orbis.setFollow(did, true);
  };

  const setUnFollow = async (did: string) => {
    await orbis.setFollow(did, false);
  };

  const getIsFollowing = async (user: string, community: string) => {
    let { data, error } = await orbis.getIsFollowing(user, community);
    return data;
  };

  return {
    setFollow,
    setUnFollow,
    getIsFollowing,
  };
};

export default authentication;
