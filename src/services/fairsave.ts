import { fairsaveUploadService } from "@data/servicesUrl";
import { Dispatch, SetStateAction } from "react";

export function uploadFairsaveImage({
  image,
  set,
}: {
  image: File;
  set: Dispatch<
    SetStateAction<
      | {
          progress: ProgressEvent<XMLHttpRequestEventTarget>;
          response: {
            cid: string;
            title: string;
          };
        }
      | undefined
    >
  >;
}) {
  console.log("test")
  const formdata = new FormData();
  formdata.append("image", image);

  const ajax = new XMLHttpRequest();
  ajax.upload.addEventListener(
    "progress",
    (progress) =>
      set((prev: any) => {
        return {
          ...prev,
          progress,
        };
      }),
    true
  );
  ajax.onload = function () {
    const response = JSON.parse(this.response) as {
      status: boolean;
      msg: { cid: string; title: string };
    };

    const cid = response.msg.cid;
    const title = response.msg.title;
    // const href = `https://${cid}.ipfs.w3s.link`;

    set((prev: any) => {
      return {
        ...prev,
        response: {
          cid,
          title,
        },
      };
    });
  };
  ajax.addEventListener("load", () => console.log("loading"), true);
  ajax.addEventListener("error", () => alert("Upload Failed"), true);
  ajax.addEventListener("abort", () => alert("Upload Aborted"), true);
  ajax.open("POST", fairsaveUploadService);
  ajax.send(formdata);
}
