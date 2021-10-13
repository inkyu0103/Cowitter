import { TwitModel } from "../lib/model/twitModel";
import styled from "@emotion/styled";
import React from "react";
import { Twit } from "./Twit";

export const TwitList = ({ twitList }: any) => {
  return (
    <TwitListContainer>
      {twitList.map((twit: TwitModel) => (
        <Twit
          key={twit.twitId}
          twitId={twit.twitId}
          content={twit.content}
          userInfo={twit.userInfo}
          twitState={twit.twitState}
          commentId={twit.commentId}
          preferenceId={twit.preferenceId}
          timeStamp={twit.timeStamp}
        />
      ))}
    </TwitListContainer>
  );
};

const TwitListContainer = styled.section``;
