import React from "react";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIconGroupContainer></HeaderIconGroupContainer>
      <HeaderProfileIconContainer />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 100%;
`;

const HeaderIconGroupContainer = styled.div``;

const HeaderProfileIconContainer = styled.div``;
