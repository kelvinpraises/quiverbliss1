import { useCreateAsset } from "@livepeer/react";
import { useCallback, useContext, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

import { uploadFairsaveImage } from "@services/fairsave";
import { CommunityEditorContext } from "@stores/studio/communityEditor/context";

const useStudioInputs = () => {
  const { communityState, communityDispatch } = useContext(
    CommunityEditorContext
  )!;

  const useUploadVideo = () => {
    const [video, setVideo] = useState<File | undefined>();

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
        setVideo(acceptedFiles[0]);
      }
    }, []);

    const dropzone = useDropzone({
      accept: { "video/*": ["*.mp4"] },
      maxFiles: 1,
      onDrop,
    });

    const assetData = useCreateAsset(
      //TODO: Change the video name to input title or not.
      video ? { sources: [{ name: video.name, file: video }] as const } : null
    );

    const { mutate: createAsset, data, status, progress, error } = assetData;

    const isLoading = useMemo(
      () =>
        status === "loading" ||
        (data?.[0] && data[0].status?.phase !== "ready"),
      [status, data]
    );

    const progressFormatted = useMemo(
      () =>
        progress?.[0].phase === "failed"
          ? "Failed to process video."
          : progress?.[0].phase === "waiting"
          ? "Waiting..."
          : progress?.[0].phase === "uploading"
          ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
          : progress?.[0].phase === "processing"
          ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
          : null,
      [progress]
    );

    return { dropzone, assetData, isLoading, progressFormatted };
  };

  const useUploadImage = () => {
    const [image, setImage] = useState<File | undefined>();
    const [get, set] = useState<{
      progress: ProgressEvent<XMLHttpRequestEventTarget>;
      response: {
        cid: string;
        title: string;
      };
    }>();

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
        uploadFairsaveImage({ image: acceptedFiles[0], set });
        setImage(acceptedFiles[0]);
        console.log("mem2");
      }
    }, []);

    const dropzone = useDropzone({
      accept: { "image/png": [".png", ".jpg", ".gif"] },
      maxFiles: 1,
      onDrop,
    });

    return { dropzone, get, image };
  };

  return {
    useUploadVideo,
    useUploadImage,
    communityState,
    communityDispatch,
  };
};

export default useStudioInputs;
