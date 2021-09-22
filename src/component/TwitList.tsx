import styled from "@emotion/styled";
import React from "react";
import { Twit } from "./Twit";

export const TwitList = () => {
  return (
    <TwitListContainer>
      {dummyTwit.map((twit) => (
        <Twit
          key={twit.twitId}
          twitId={twit.twitId}
          title={twit.title}
          content={twit.content}
        />
      ))}
    </TwitListContainer>
  );
};

const TwitListContainer = styled.section``;

const dummyTwit = [
  {
    twitId: "1",
    title: "안녕하세요",
    content: "아주 코인시장이 활발하네요.",
  },
];
