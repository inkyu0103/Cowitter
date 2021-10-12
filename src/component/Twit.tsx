import { TwitModel } from "@/lib/model/twitModel";
import { default as TwitObj } from "../lib/repository/Twit";
import styled from "@emotion/styled";
import React from "react";
import userDefault from "../assets/userIcon.png";

export const Twit = ({
  twitId,
  content,
  userInfo,
  twitState,
  commentId,
  preferenceId,
  timeStamp,
}: TwitModel) => {
  return (
    <TwitContainer twitState={twitState}>
      <TwitMaininfoWrapper>
        <TwitUserImageContainer src={userInfo.photoURL || userDefault} />
        <TwitMainTextContentWrapper>
          <h1>{userInfo.displayName}</h1>
          <div>{content.content}</div>
        </TwitMainTextContentWrapper>
      </TwitMaininfoWrapper>
      <TwitImgWrapper>
        {content.imageUrl && <img src={content.imageUrl} />}
      </TwitImgWrapper>
      <TwitIconListWrapper></TwitIconListWrapper>
      <button onClick={() => TwitObj.deleteTwit(twitId)}>삭제</button>
    </TwitContainer>
  );
};

const TwitContainer = styled.article<{ twitState: number }>`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ twitState }) => (twitState ? "#F79489" : "#18A558")};
  margin-bottom: 10px;
  border-radius: 40px;
`;

const TwitMaininfoWrapper = styled.div`
  display: flex;
`;

const TwitMainTextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TwitUserImageContainer = styled.img`
  width: 40px;
  height: 40px;
  padding: 4px;
  border-radius: 50%;
`;

const TwitImgWrapper = styled.div``;

const TwitIconListWrapper = styled.div`
  width: 100%;
  display: flex;
`;
