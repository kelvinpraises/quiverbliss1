import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { useEffect, useMemo, useState } from "react";

const useCommunities = () => {
  const [communities, setCommunities] = useState<any[]>([]);

  useEffect(() => {
    let communities: ICommunities[];

    const getDocument = async () => {
      const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

      /* eslint-disable */
      // @ts-ignore
      const doc = await TileDocument.deterministic(ceramic, {
        /* eslint-enable */
        // Did of the tile controller.
        controllers: [
          "did:key:z6Mkk6o6NqAZjhLSDD64dEQQyocDpH9ojyx476suWiDbezJv",
        ],

        // Deployed model aliases definition.
        family:
          "kjzl6cwe1jw14bm6am83jum9z1uc9kzr8db2kmxvo1g0re9ifww9js1g51y7cxk",
      });

      return doc;
    };

    const c = (async () => {
      const doc = await getDocument();
      console.log("hope here");
      const data: any = doc.content;
      setCommunities(data.data);
    })();

    communities = [
      {
        avatar:
          "http://localhost:5500/public/images/548256E1-BC17-4449-AE60-9E570E518142.jpg",
        name: "Dreampiper",
        location: "Worldwide",
        id: "dreampiper",
      },
      {
        avatar: "http://localhost:5500/public/images/dreamy.png",
        name: "Seraph",
        location: "Heaven",
        id: "heaven",
      },
    ];
  }, []);

  return {
    communities,
  };
};

export default useCommunities;
