import { Web3Provider } from "@ethersproject/providers";
import { EnvOptions, VocdoniSDKClient } from "@vocdoni/sdk";

export const vocdoniConnect = async (provider: Web3Provider) => {
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
