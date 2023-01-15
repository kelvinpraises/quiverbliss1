import { Web3Provider } from "@ethersproject/providers";
/* eslint-disable */
// @ts-ignore
import { Orbis } from "@orbisclub/orbis-sdk";
/* eslint-enable */

let orbis = new Orbis();

export const orbisConnect = async (provider: Web3Provider) => {
  let res = await orbis.connect_v2();

  /** Check if connection is successful or not **/
  if (res.status == 200) {
    return res.did;
  } else {
    console.log("Error connecting to Ceramic: ", res);
    alert("Error connecting to Ceramic.");
  }
};

export const orbisDisconnect = async () => {
  await orbis.logout();
};

export const updateOrbisProfile = async ({
  pfp,
  username,
  cover,
  description,
}: {
  pfp?: string;
  username?: string;
  cover?: string;
  description?: string;
} = {}) => {
  const res = await orbis.updateProfile({
    pfp,
    username,
    cover,
    description,
  });

  let result;

  if (res.status === 200) {
    result = {
      success: true,
      message: "Success updating profile",
    };
  } else {
    result = {
      success: false,
      message: "Error updating profile",
    };
  }

  return result;
};
