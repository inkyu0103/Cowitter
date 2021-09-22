import { TwitModel } from "@/lib/model/twitModel";
import styled from "@emotion/styled";
import React from "react";

export const Twit = ({ twitId, title, content }: TwitModel) => {
  return (
    <TwitContainer>
      <div>{twitId}</div>
      <div>{title}</div>
      <div>{content}</div>
    </TwitContainer>
  );
};

const TwitContainer = styled.article``;
