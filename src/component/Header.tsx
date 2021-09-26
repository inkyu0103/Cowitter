import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import ETH from "../assets/eth.png";
import home from "../assets/home.png";
import userIcon from "../assets/userIcon.png";
import message from "../assets/message.png";
import { useAuth } from "../lib/hooks/useAuth";
import logout from "../assets/logout.png";

interface IHeader {
  handleLogin: () => void;
  handleLogout: () => void;
}

export const Header = ({ handleLogin, handleLogout }: IHeader) => {
  const myInfo = useAuth();

  return (
    <HeaderContainer>
      <HeaderIconWithTitleContainer>
        <HeaderIconWrapper>
          <HeaderIcon src={ETH} />
        </HeaderIconWrapper>
        <HeaderTitle>Cowitter</HeaderTitle>
      </HeaderIconWithTitleContainer>

      {myInfo?.uid ? (
        <HeaderNavLinkConatiner>
          <NavLink to="/" activeStyle={{ fontWeight: "bold" }} exact>
            <HeaderIconWrapper>
              <HeaderNavIcon src={home} />
              <HeaderNavText>Home</HeaderNavText>
            </HeaderIconWrapper>
          </NavLink>
          <NavLink to="/profile" activeStyle={{ fontWeight: "bold" }}>
            <HeaderIconWrapper>
              <HeaderNavIcon src={userIcon} />
              <HeaderNavText>Profile</HeaderNavText>
            </HeaderIconWrapper>
          </NavLink>

          <HeaderIconWrapper onClick={handleLogout}>
            <HeaderNavIcon src={logout} />
            <HeaderNavText>Logout</HeaderNavText>
          </HeaderIconWrapper>
        </HeaderNavLinkConatiner>
      ) : (
        <HeaderNavLinkConatiner>
          <button onClick={handleLogin}>로그인</button>
        </HeaderNavLinkConatiner>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  border: 1px solid black;
`;

const HeaderIconWithTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const HeaderTitle = styled.div`
  font-size: 36px;
  font-weight: 900;
`;

const HeaderNavLinkConatiner = styled.section`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
`;

const HeaderNavIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const HeaderNavText = styled.span`
  font-size: 25px;
`;
