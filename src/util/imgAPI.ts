import axios from "axios";

export const uploadImage = async (imageData: any) => {
  const response = await axios.post(
    `https://api.imgbb.com/1/upload`,
    imageData
  );
  const {
    data: { display_url },
  } = response.data;

  return display_url;
};

export const makeImageFormData = (image: any) => {
  const newImageData = new FormData();
  newImageData.append("image", image);
  newImageData.append("key", "befecb092df951f4dcbfe856c2369fb1");
  return newImageData;
};
