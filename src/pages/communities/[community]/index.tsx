import Head from "next/head";
import { Suspense, useEffect } from "react";
import Scaffold from "../../../features/common/layout/Scaffold";
import useCommunity from "../../../features/community/hooks/community";
import CommunityCover from "../../../features/community/layout/CommunityCover";
import CommunityIntro from "../../../features/community/layout/CommunityIntro";
import ProjectCards from "../../../features/community/layout/ProjectCards";

export function fetchData() {
  let catsPromise = fetchCats();
  return {
    cats: wrapPromise(catsPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchCats() {
  console.log("fetch cats...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetched cats");
      // resolve([{ name: "treal" }, { name: "satre" }]);
      reject();
    }, 6100);
  });
}

const data = fetchData();

export default function Community() {
  // const cats = data.cats.read();

  console.log("cats");
  // console.log(cats);

  const { init } = useCommunity();
  useEffect(() => {
    init();
  }, [init]);

  console.count("what?");

  return (
    <>
      <Suspense fallback={<p>..loading</p>}>
        <Head>
          <title>Community</title>
          <meta name="description" content="QuiverBliss" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Scaffold>
          <CommunityCover />
          <CommunityIntro />
          <ProjectCards />
        </Scaffold>
      </Suspense>
    </>
  );
}
