import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { firebaseInstance } from "./FBinstance";

export const authInstance = getAuth(firebaseInstance);
export const provider = new GoogleAuthProvider();
