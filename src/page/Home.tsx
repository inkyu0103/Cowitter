import { Header, Main, SideBar } from "../component/index";
import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { provider, authInstance } from "../lib/constant/firebase/auth";
import { login, logout } from "../lib/store/slices/authSlice";

export const Home = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(authInstance, provider);
    const userData = providerData[0];
    dispatch(login(userData));
  };
  const handleLogout = () => {
    signOut(authInstance);
    dispatch(logout());
  };

  return (
    <HomeContainer>
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleLogout}>로그아웃</button>
      <Header />
      <Main />
      <SideBar />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
`;
