import styled from "@emotion/styled";
import React, { ReactEventHandler, useRef, useState } from "react";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/constant/firebase/fdb";
import { useAuth } from "../lib/hooks/useAuth";
import Twit from "../lib/repository/Twit";
import picture from "../assets/picture.png";

export const WriteTwit = () => {
  const { displayName, uid, photoURL } = useAuth();
  const [content, setContent] = useState(null);
  // 0 - buy, 1 - sell
  const [twitState, setTwitState] = useState(0);
  const [twitImg, setTwitImg] = useState(null);

  const inputRef = useRef(null)

  const handleInput = (e: any) => {
    setContent(e.target.value);
  };

  const handleAddTwit = async () => {
    const userInfo = { displayName, photoURL, uid };
    await Twit.addTwit({ content, userInfo, twitState });
    setContent("");
  };

  const handleOnChange =  async() =>{

  }

  return (
    <WriteTwitContainer>
      <WriteTwitProfileImgWrapper>
        <WriteTwitProfileImg src={photoURL} />
      </WriteTwitProfileImgWrapper>

      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <WriteTwitInputWrapper>
          <WriteTwitInput onChange={handleInput} />
        </WriteTwitInputWrapper>

        <WriteTwitIconWrapper>
          <WriteTwitAddImageIconWrapper>
            <WriteTwitAddImageInput type="file" accept="image/*" ref={inputRef} onChange={handleOnChange}/>
            <WriteTwitAddImageIcon src={picture} />
          </WriteTwitAddImageIconWrapper>
          {BtnGroup.map((btn, idx) => {
            return (
              <StateBtn
                selected={btn.selected}
                background={btn.background}
                onClick={(e) => {
                  setTwitState(btn.state);
                  btn.selected = true;
                  BtnGroup.forEach((obtn, oidx) => {
                    if (idx !== oidx) {
                      obtn.selected = false;
                    }
                  });
                }}
              >
                {btn.name}
              </StateBtn>
            );
          })}

          <TwitBtn onClick={handleAddTwit}>Cowit!</TwitBtn>
        </WriteTwitIconWrapper>
      </div>
    </WriteTwitContainer>
  );
};

const BtnGroup = [
  {
    name: "Buy",
    state: 0,
    background: "#18A558",
    selected: true,
  },
  {
    name: "Sell",
    state: 1,
    background: "#F79489",
    selected: false,
  },
];

const StateBtn = styled.button<{ selected: boolean; background: string }>`
  height: 30px;
  background-color: ${({ selected, background }) =>
    selected ? background : "white"};
  width: 60px;
  transition: background-color 0.2s;
  border: none;
  border-radius: 50px;

  :hover {
    background: ${({ background, selected }) => {
      if (selected === false && background === "#18A558") {
        return "#A3EBB1";
      } else if (selected === false && background === "#F79489") {
        return "#F8AFA6";
      }
    }};
  }
`;

const WriteTwitContainer = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

const WriteTwitProfileImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

const WriteTwitProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const WriteTwitInputWrapper = styled.div`
  width: 100%;
`;

const WriteTwitInput = styled.textarea`
  font-size: 24px;
  width: 100%;
  height: 100px;
  resize: none;
`;

const WriteTwitAddImgWrapper = styled.div``;

const WriteTwitAddImageIcon = styled.img`
  position: absolute;
  opacity: 1;
  z-index: 1;
  width: 30px;
  height: 30px;
`;

const WriteTwitIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const WriteTwitAddImageIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteTwitAddImageInput = styled.input`
  width: 30px;
  height: 30px;
  opacity: 0;
`;

const TwitBtn = styled.button`
  border: 0;
  outline: 0;
  width: 60px;
  height: 30px;
  border-radius: 50px;
  color: #ffffff;
  font-size: 15px;
  background: #728bec;
  transition: background-color 0.2s;

  :hover {
    background: #90a3f1;
    transition-property: background-color;
  }
  :active {
    background: #989898;
    transition-property: background-color;
  }
`;
