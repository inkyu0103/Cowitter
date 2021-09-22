import styled from "@emotion/styled";
import React from "react";

export const WriteTwit = () => {
  return (
    <WriteTwitContainer>
      <WriteTwitInput />
      <TwitBtn>Twit</TwitBtn>
    </WriteTwitContainer>
  );
};

const WriteTwitContainer = styled.section``;

const WriteTwitInput = styled.textarea``;

const TwitBtn = styled.button``;
