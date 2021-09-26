import { TwitModel } from "@/lib/model/twitModel";
import { default as TwitObj } from "../lib/repository/Twit";
import styled from "@emotion/styled";
import React from "react";
import userDefault from "../assets/userIcon.png";
import Prefer from "../lib/repository/Prefer";

export const Twit = ({
  twitId,
  imgUrl,
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
          <div>{content}</div>
        </TwitMainTextContentWrapper>
      </TwitMaininfoWrapper>
      <TwitImgWrapper>{imgUrl && <img src={imgUrl} />}</TwitImgWrapper>
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

const TwitLikeIconWrapper = styled.div``;
const TwitLikeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

// main info --> userimg , id, content
// 좋아요를 누른다 --> 이 글을 좋아하는 사람 목록에 추가된다.

const TwitImgWrapper = styled.div``;

const TwitIconListWrapper = styled.div`
  width: 100%;
  display: flex;
`;
