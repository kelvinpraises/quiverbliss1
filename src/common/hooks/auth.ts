import { hooks as mhooks } from "../../connector/metamask";
import { hooks as whooks } from "../../connector/walletconnect";
import { Web3Provider } from "@ethersproject/providers";

const useAuth = () => {
  const mprovider = mhooks.useProvider();
  const wprovider = whooks.useProvider();
  const isMMActive = mhooks.useIsActive();
  const isWCActive = whooks.useIsActive();
  const providers: { [key: string]: Web3Provider | undefined } = {
    metamask: mprovider,
    walletconnect: wprovider,
  };

  (async () => {})();

  const connectMetamask = () => {};
};

export default useAuth;
