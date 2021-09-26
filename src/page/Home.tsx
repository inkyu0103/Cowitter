import { Header, Main, SideBar } from "../component/index";
import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { provider, authInstance } from "../lib/constant/firebase/auth";
import { login, logout } from "../lib/store/slices/authSlice";
import Twit from "../lib/repository/Twit";
import Auth from "../lib/repository/Auth";

export const Home = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(authInstance, provider);
    const userData = providerData[0];
    const isExistUser = await Auth.isUserExist(userData.uid);

    // 없는 경우에는 만들어줘야 한다.
    if (!isExistUser) {
      await Auth.addUser({
        displayName: userData.displayName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        photoURL: userData.photoURL,
        providerId: userData.providerId,
        uid: userData.uid,
      });
    }

    dispatch(login(userData));
  };

  const handleLogout = () => {
    signOut(authInstance);
    dispatch(logout());
  };

  const testClick = async () => {
    const twitList = await Twit.getTwits();
    console.log(twitList);
  };

  return (
    <HomeContainer>
      <Header handleLogin={handleLogin} handleLogout={handleLogout} />
      <Main />
      <SideBar />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid green;
`;
