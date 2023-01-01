import { SetStateAction } from "react";
import styled from "styled-components";
import useOrbis from "../hooks/comment";
import CommentDialog from "./Comment";

const Comments = () => {
  const orbis = useOrbis();

  // return null

  return (
    <SBackground>
      <SModal>
        <SHeader>
          <SHeaderTitle>
            <SCommentHead>Comments</SCommentHead>
            <SCommentLength>{orbis.commentData?.length}</SCommentLength>
          </SHeaderTitle>
          <button onClick={orbis.connect}>
            {orbis.user ? "connected" : "connect"}
          </button>
          <SClose>X</SClose>
        </SHeader>

        <SBody>
          <SAddComment>
            <SProfile></SProfile>
            <SCommentBox>
              <SInput
                placeholder="Add a comment..."
                value={orbis.comment}
                onChange={(e) => orbis.setComment(e.target.value)}
              />
              <button onClick={orbis.commentOnPost}>comment</button>
              <button onClick={orbis.getPost}>get post</button>
            </SCommentBox>
          </SAddComment>
          <SComments>
            {(orbis.commentData?.length || 0) > 1 &&
              orbis.commentData!.map((post, i) => {
                const {
                  creator_details: { did, profile },
                  content: { body },
                  count_likes,
                  count_downvotes,
                  stream_id,
                } = post;

                return (
                  <CommentDialog
                    did={did}
                    profile={profile}
                    body={body}
                    count_likes={count_likes}
                    count_downvotes={count_downvotes}
                    stream_id={stream_id}
                    setRepliesLength={function (
                      value: SetStateAction<number | undefined>
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                );
              })}
          </SComments>
        </SBody>
      </SModal>
    </SBackground>
  );
};

export default Comments;

const SCommentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgb(0, 0, 0);
  display: grid;
  place-items: center;
`;

const SModal = styled.div`
  height: 70vh;
  min-height: 240px;
  max-height: 720px;
  width: 450px;
  min-width: 300px;
  max-width: 80vw;
  background-color: #212121;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem 0;
`;

const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
`;

const SHeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SCommentLength = styled.p`
  font-size: 1rem;
  padding-left: 10px;
  font-weight: 400;
  color: #aaaaaa;
`;

const SCommentHead = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f1f1f1;
`;

const SClose = styled.p`
  color: #d3d3d3;
  font-size: 1rem;
`;

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const SAddComment = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
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
  transform: translateY(-50%);
  background-color: transparent;
  resize: none;
  outline: none;
  color: #f1f1f1;
  flex: 1;
`;

const SComments = styled.div`
  display: flex;
  flex-direction: column;
`;
