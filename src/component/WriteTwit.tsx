import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { useAuth } from "../lib/hooks/useAuth";
import Twit from "../lib/repository/Twit";
import picture from "../assets/picture.png";
import Buy from "../assets/Buy.png";
import Sell from "../assets/Sell.png";
import { ColorMap } from "../lib/constant/Color";
import { storage } from "../lib/constant/firebase/storage";
import Storage from "../lib/repository/Storage";

export const WriteTwit = () => {
  const { displayName, uid, photoURL } = useAuth();
  const [twitContent, setTwitContent] = useState({
    content: null,
    twitState: 0,
    image: {
      name: null,
      url: null,
    },
  });

  const inputRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTwitContent({ ...twitContent, ["content"]: e.target.value });
  };

  const handleAddTwit = async () => {
    const userInfo = { displayName, photoURL, uid };
    await Twit.addTwit({
      content: {
        content: twitContent.content,
        imageUrl: twitContent.image.url,
      },
      userInfo: {
        displayName,
        uid,
        photoUrl: photoURL,
      },
      twitState: twitContent.twitState,
    });
  };

  const handleChangeInput = async () => {
    const imageReader = new FileReader();
    const myStorageRef = await Storage.getMyStorageRef(uid);

    if (inputRef.current.files && inputRef.current.files[0]) {
      imageReader.addEventListener("load", async (event) => {
        const fileRef = await Storage.getFileRef({
          storageRef: myStorageRef,
          path: `${uid}/${twitContent.image.name}`,
        });
        await Storage.uploadFile({ fileRef, file: event.target.result });

        // 아 사진이 없는 경우도 있구나? 사진 url 받아오는 건 여기서 할 일이 아닌데..?

        const imageUrl = await Storage.getImageUrl({
          storageRef: myStorageRef,
          path: `${uid}/${twitContent.image.name}`,
        });

        setTwitContent({
          ...twitContent,
          ["image"]: {
            url: imageUrl,
            name: inputRef.current.files[0].name,
          },
        });
      });
    }
    imageReader.readAsDataURL(inputRef.current.files[0]);
  };

  const handleDeletePreviewImage = () => {
    setTwitContent({
      ...twitContent,
      ["image"]: { name: null, url: null },
    });
  };

  return (
    <WriteTwitContainer>
      <WriteTwitProfileImgWrapper>
        <WriteTwitProfileImg src={photoURL} />
      </WriteTwitProfileImgWrapper>

      <WriteTwitContentsWrapper>
        <WriteTwitInputWrapper>
          <WriteTwitInput
            onChange={handleInputChange}
            placeholder="What's happening?"
          />
        </WriteTwitInputWrapper>

        {twitContent.image?.url && (
          <WriteTwitImagePreviewWrapper>
            <WriteTwitImageDeleteBtn onClick={handleDeletePreviewImage} />

            <WriteTwitImagePreview src={twitContent.image.url} />
          </WriteTwitImagePreviewWrapper>
        )}

        <WriteTwitIconWrapper>
          <WriteTwitAddImageIconWrapper>
            <WriteTwitAddImageInput
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleChangeInput}
            />
            <WriteTwitAddImageIcon src={picture} />
          </WriteTwitAddImageIconWrapper>

          {BtnGroup.map((btn, idx) => {
            return (
              <WriteTwitBuySellIconWrapper
                key={idx}
                selected={btn.selected}
                background={btn.background}
                onClick={(e) => {
                  setTwitContent({ ...twitContent, ["twitState"]: btn.state });
                  btn.selected = true;
                  BtnGroup.forEach((obtn, oidx) => {
                    if (idx !== oidx) {
                      obtn.selected = false;
                    }
                  });
                }}
              >
                <WriteTwitBuySellIcon src={btn.icon}></WriteTwitBuySellIcon>
              </WriteTwitBuySellIconWrapper>
            );
          })}

          <TwitBtn onClick={handleAddTwit}>COWIT</TwitBtn>
        </WriteTwitIconWrapper>
      </WriteTwitContentsWrapper>
    </WriteTwitContainer>
  );
};

const BtnGroup = [
  {
    name: "Buy",
    state: 0,
    background: "#66DE93",
    selected: true,
    icon: Buy,
  },
  {
    name: "Sell",
    state: 1,
    background: "#FF616D",
    selected: false,
    icon: Sell,
  },
];

const WriteTwitImagePreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 4px 0 4px 0;
`;

const WriteTwitImageDeleteBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: black;
  transition: background-color 0.2s;
  text-decoration: none;
  border: none;

  :hover {
    background: white;
    transition: background-color;
  }
`;

const WriteTwitImagePreview = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const WriteTwitBuySellIconWrapper = styled.div<{
  selected: boolean;
  background: string;
}>`
  background-color: ${({ selected, background }) =>
    selected ? background : "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  transition: background-color 0.2s;

  :hover {
    background: ${({ background }) => background};
    transition: background-color;
  }
`;

const WriteTwitContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  border-bottom: 1px solid #eff3f4;
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

const WriteTwitContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  width: 20px;
  height: 20px;
`;

const WriteTwitIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const WriteTwitAddImageIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 50%;
  transition: background-color 0.2s;

  :hover {
    background-color: ${ColorMap.LIGHT_GREEN};
  }
`;

const WriteTwitAddImageInput = styled.input`
  width: 30px;
  height: 30px;
  opacity: 0;
`;

const WriteTwitBuySellIcon = styled.img`
  width: 30px;
  height: 30px;
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
  margin-left: 10px;

  :hover {
    background: #90a3f1;
    transition-property: background-color;
  }
  :active {
    background: #989898;
    transition-property: background-color;
  }
`;
