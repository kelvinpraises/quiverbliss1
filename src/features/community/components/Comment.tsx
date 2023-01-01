import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ellipsisAddress from "../../../utils/ellipsisAddress";
import useOrbis from "../hooks/comment";

interface ICommentDialog {
  did: string;
  profile: any;
  body: string;
  count_likes: number;
  count_downvotes: number;
  stream_id: string;
  setRepliesLength: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const CommentDialog: React.FC<ICommentDialog> = ({
  did,
  profile,
  body,
  count_likes,
  count_downvotes,
  stream_id,
}) => {
  const orbis = useOrbis();

  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [repliesLength, setRepliesLength] = useState<number>();

  const getReply = () => {
    if (showReplies == false) {
      orbis.getCommentReply(stream_id);
      setShowReplies(true);
    } else {
      setShowReplies(false);
    }
  };

  return (
    <SSingleComment>
      <SProfile></SProfile>
      <SBox>
        <SCommenterDetails>
          <SBold>
            {profile?.username ? profile?.username : ellipsisAddress(did, 10)}
          </SBold>{" "}
          8 days ago
        </SCommenterDetails>
        <SCommentBody>{body}</SCommentBody>
        <SReact>
          <SImg
            src="/Like.svg"
            alt="like"
            onClick={() => orbis.reactOnPost(stream_id, "like")}
          />
          <SReactNumbers> {count_likes} </SReactNumbers>
          <SImg
            src="/Unlike.svg"
            alt="unlike"
            onClick={() => orbis.reactOnPost(stream_id, "downvote")}
          />
          <SReactNumbers>{count_downvotes}</SReactNumbers>
          <STextButton onClick={() => setShowReplyInput(true)}>
            Reply
          </STextButton>
        </SReact>
        {showReplyInput == true && (
          <SReplyToComment>
            <SReplyInput
              placeholder="Add a reply..."
              autoFocus
              value={orbis.reply}
              onChange={(e) => orbis.setReply(e.target.value)}
            />
            <SBox1>
              <STextButton onClick={() => setShowReplyInput(false)}>
                Cancel
              </STextButton>
              <STextButton onClick={() => orbis.replyToComment(stream_id)}>
                Reply
              </STextButton>
            </SBox1>
          </SReplyToComment>
        )}
        <SRepliesToComment onClick={getReply}>
          <img src="/reply.svg" alt="" />
          <SReactNumbers>2 replies</SReactNumbers>
        </SRepliesToComment>

        {(orbis?.commentReplyData?.length || 0) > 1 &&
          showReplies == true &&
          orbis.commentReplyData!.map((post, index) => {
            const {
              creator_details: { did, profile },
              content: { body },
              count_likes,
              count_downvotes,
              stream_id,
            } = post;
            return (
              <ReplyToPostDetails
                key={index}
                did={did}
                profile={profile}
                body={body}
                count_likes={count_likes}
                count_downvotes={count_downvotes}
                stream_id={stream_id}
                setRepliesLength={setRepliesLength}
              />
            );
          })}
      </SBox>
    </SSingleComment>
  );
};

export default CommentDialog;

const ReplyToPostDetails: React.FC<ICommentDialog> = ({
  did,
  profile,
  body,
  count_likes,
  count_downvotes,
  stream_id,
  setRepliesLength,
}) => {
  const orbis = useOrbis();

  useEffect(() => {}, []);

  return (
    <SSingleComment>
      <SProfile></SProfile>
      <SBox>
        <SCommenterDetails>
          <SBold>
            {profile?.username ? profile?.username : ellipsisAddress(did, 5)}
          </SBold>{" "}
          8 days ago
        </SCommenterDetails>
        <SCommentBody>{body}</SCommentBody>
        <SReact>
          <SImg
            src="/Like.svg"
            alt="like"
            onClick={() => orbis.reactOnPost(stream_id, "like")}
          />
          <SReactNumbers> {count_likes} </SReactNumbers>
          <SImg
            src="/Unlike.svg"
            alt="unlike"
            onClick={() => orbis.reactOnPost(stream_id, "downvote")}
          />
          <SReactNumbers>{count_downvotes}</SReactNumbers>
        </SReact>
      </SBox>
    </SSingleComment>
  );
};

const SBox1 = styled.div`
  display: flex;
  justify-content: end;
`;

const SReplyToComment = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

const STextButton = styled.p`
  font-size: 12px;
  cursor: default;
  padding-left: 10px;
  :hover {
    color: #747474;
  }
`;

const SImg = styled.img`
  width: 14px;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SSingleComment = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const SProfile = styled.div`
  width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: #fa7070;
  margin-right: 1rem;
`;

const SInput = styled.textarea`
  font-size: 12px;
  padding: 0 2px;
  border: none;
  border-bottom: 1px solid #323232;
  /* height: min-content; */
  transform: translateY(-50%);
  background-color: transparent;
  resize: none;
  outline: none;
  color: #f1f1f1;
  flex: 1;
`;

const SReplyInput = styled(SInput)`
  transform: translateY(0);
`;

const SBold = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #f1f1f1;
  padding-right: 6px;
`;

const SCommenterDetails = styled.p`
  font-size: 12px;
  color: #aaaaaa;
`;

const SCommentBody = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const SReact = styled.div`
  display: flex;
  padding-top: 6px;
`;

const SReactNumbers = styled.span`
  padding: 0 1.8rem 0 0.5rem;
  color: #aaaaaa;
  font-size: 12px;
`;

const SRepliesToComment = styled.div`
  margin-top: 0.5rem;
  padding-left: 10px;
  padding-bottom: 16px;
  cursor: pointer;
`;
