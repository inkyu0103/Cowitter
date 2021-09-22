import styled from "@emotion/styled";
import React from "react";
import { TwitList } from "./TwitList";
import { WriteTwit } from "./WriteTwit";

export const Main = () => {
  return (
    <MainContainer>
      <WriteTwit />
      <TwitList />
    </MainContainer>
  );
};

const MainContainer = styled.section``;
