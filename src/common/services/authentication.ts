import { Web3Provider } from "@ethersproject/providers";
/* eslint-disable */
// @ts-ignore
import { Orbis } from "@orbisclub/orbis-sdk";
/* eslint-enable */
import { EnvOptions, VocdoniSDKClient } from "@vocdoni/sdk";

let orbis = new Orbis();

const authentication = () => {
  const orbisConnect = async (provider: Web3Provider) => {
    let res = await orbis.connect_v2();

    /** Check if connection is successful or not */
    if (res.status == 200) {
      return res.did;
    } else {
      console.log("Error connecting to Ceramic: ", res);
      alert("Error connecting to Ceramic.");
    }
  };

  const vocdoniConnect = async (provider: Web3Provider) => {
    const client = new VocdoniSDKClient({
      env: EnvOptions.DEV,
      wallet: provider.getSigner(),
    });

    // fetch info or create account if does not exist
    let acc = await client.createAccount();
    try {
      if (!acc) {
        throw new Error("fetch account failed");
      }

      // only for development purposes, request more tokens if balance is zero
      if (acc.balance <= 0) {
        await client.collectFaucetTokens();
        acc = await client.fetchAccountInfo();
      }
    } catch (e) {
      console.error("failed account creation", e);
    }
  };

  const connect = async (provider: Web3Provider) => {
    await vocdoniConnect(provider);
    await orbisConnect(provider);
  };

  const disconnect = async () => {
    await orbis.logout();
  };

  return {
    connect,
    disconnect,
  };
};

export default authentication;
