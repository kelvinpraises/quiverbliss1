interface ICommentData {
  stream_id: string;
  creator: string;
  creator_details: {
    did: string;
    profile: {
      username: string;
      pfp: string;
    };
  };
  content: {
    body: string;
  };
  context: undefined;
  context_details: {
    group_id: string;
    group_details: {};
    channel_id: string;
    channel_details: {};
  };
  master: string;
  reply_to: string;
  reply_to_details: {
    body: string;
  };
  count_likes: number;
  count_haha: number;
  count_downvotes: number;
  count_replies: number;
}
