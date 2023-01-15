import { useCallback, useContext } from "react";

import { CommunityEditorContext } from "@stores/studio/communityEditor/context";
import { UserContext } from "@stores/user/context";
import { updateOrbisProfile } from "@services/orbis";

const useStudio = () => {
  const { userState } = useContext(UserContext)!;
  const { communityState, communityDispatch } = useContext(
    CommunityEditorContext
  )!;

  const getUserAuthorization = useCallback(() => {
    return {
      loggedIn: userState?.loggedIn,
      isCommunityProfile: userState?.isCommunityProfile,
    };
  }, [userState]);

  const saveCommunityEdit = useCallback(async () => {
    // orbis
    await updateOrbisProfile({
      pfp: communityState?.pfp,
      username: communityState?.name,
      cover: communityState?.coverImage,
      description: communityState?.description,
    });

    // quiverbliss
  }, [userState]);

  return {
    getUserAuthorization,
    saveCommunityEdit,
    communityState,
    communityDispatch,
  };
};

export default useStudio;
