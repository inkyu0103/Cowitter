import React from "react";
import { css, Global } from "@emotion/react";
import { Switch, Route, Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { authInstance, provider } from "./lib/constant/firebase/auth";
import { useDispatch } from "react-redux";
import { Home } from "./page/Home";
import { useAuth } from "./lib/hooks/useAuth";

export const App = () => {
  const a = useAuth();

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

  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    @font-face {
      font-family: "Vitro_core";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Vitro_core.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
  }
  #root {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
