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
