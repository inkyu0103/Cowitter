import { useAuth } from "../lib/hooks/useAuth";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { TwitList } from "./TwitList";
import { WriteTwit } from "./WriteTwit";
import Twit from "../lib/repository/Twit";

export const Main = () => {
  const myInfo = useAuth();
  const [twitList, setTwitList] = useState(null);
  // check
  useEffect(() => {
    const getTwits = async () => {
      const response = await Twit.getTwits();
      setTwitList(response);
    };
    getTwits();
  }, []);

  //좋아요 처리
  return (
    <MainContainer>
      <HomeText>HOME</HomeText>
      {myInfo?.uid && <WriteTwit />}
      {twitList?.length && <TwitList twitList={twitList} />}
    </MainContainer>
  );
};

const MainContainer = styled.section`
  width: 500px;
`;

const HomeText = styled.div`
  width: 100%;
  font-size: 30px;
  margin-bottom: 30px;
  border: 1px solid black;
`;
