import React from "react";
import { css, Global } from "@emotion/react";
import { Switch, Route, Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { authInstance, provider } from "./lib/constant/firebase/auth";
import { useDispatch } from "react-redux";
import { Home } from "./page/Home";

export const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Switch>
        <Home />
      </Switch>
    </>
  );
};

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }
`;
