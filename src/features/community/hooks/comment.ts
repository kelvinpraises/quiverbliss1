import React, { useEffect, useState } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";

let orbis = new Orbis();

const useOrbis = () => {
  const [user, setUser] = useState();
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [commentData, setCommentData] = useState<ICommentData[]>();
  const [commentReplyData, setCommentReplyData] = useState<ICommentData[]>();

  useEffect(() => {
    getPost();
  }, [user]);

  const connect = async () => {
    let res = await orbis.isConnected();

    if (res.status == 200) {
      setUser(res);
    } else {
      res = await orbis.connect();

      if (res.status == 200) {
        setUser(res);
      } else {
        console.log("Error connecting to Ceramic: ", res);
        alert("Error connecting to Ceramic.");
      }
    }
  };

  const createNewGroup = async () => {
    const createGroup = await orbis.createGroup({
      pfp: "https://...",
      name: "Orbis Community",
    });

    const createChannel = await orbis.createChannel(createGroup.doc, {
      pfp: "https://...",
      name: "Orbis Community",
      description: "Official place to discuss Orbis related stuff.",
      type: "feed",
      vcAccessRules: [
        {
          id: "GitHub",
          key: "provider",
          rule: "=",
          issuer: "did:key:z6mkghvghlobledj1bgrlhs4lpgjavbma1tn2zcryqmyu5lc",
        },
      ],
    });
  };

  const addToChannel = async (streamId: string) => {
    let res = await orbis.setGroupMember(streamId, true);
  };

  const editComment = async (streamId: string) => {
    let res = await orbis.editPost(streamId, { body: "gn!" });
  };

  const deletePost = async (streamId: string) => {
    let res = await orbis.deletePost(streamId);
  };

  const reactOnPost = async (streamId: string, react: string) => {
    let res = await orbis.react(streamId, react);
    if (res.status == 200) {
      getPost();
    }
  };

  const updateProfile = async (pfp: string, username: string) => {
    let res = await orbis.updateProfile({
      pfp,
      username,
    });
  };

  const commentOnPost = async () => {
    try {
      const c = await orbis.createPost({
        body: comment,
        context: `replyTo2${user}`,
      });
      if (c.status == 200) {
        setComment("");
        await getPost();
      }
    } catch (error) {
      alert(error);
    }
  };

  const replyToComment = async (streamId: string) => {
    try {
      const c = await orbis.createPost({
        body: reply,
        master: streamId,
      });
      if (c.status == 200) {
        setReply("");
        getCommentReply(streamId);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getPost = async () => {
    let { data, error } = await orbis.getPosts({
      context: `replyTo2${user}`,
    });

    console.log(data);

    if (data) {
      setCommentData(data);
    }
  };

  const getCommentReply = async (streamId: string) => {
    let { data, error } = await orbis.getPosts({ master: streamId });

    console.log(data);
    if (data) {
      setCommentReplyData(data);
    }
  };

  return {
    user,
    comment,
    reply,
    commentData,
    getPost,
    connect,
    createNewGroup,
    addToChannel,
    editComment,
    deletePost,
    reactOnPost,
    updateProfile,
    commentOnPost,
    replyToComment,
    setComment,
    setReply,
    getCommentReply,
    commentReplyData,
  };
};

export default useOrbis;
