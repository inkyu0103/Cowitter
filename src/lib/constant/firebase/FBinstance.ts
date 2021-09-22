import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABjB-Yu4LvwUT0VOCkjeyA3_nZsy4INTU",
  authDomain: "cowitter-705d0.firebaseapp.com",
  projectId: "cowitter-705d0",
  storageBucket: "cowitter-705d0.appspot.com",
  messagingSenderId: "624540837229",
  appId: "1:624540837229:web:7d6a4d1fe7294a0669a664",
  measurementId: "G-0MTF6XHXBT",
};

export const firebaseInstance = initializeApp(firebaseConfig);
