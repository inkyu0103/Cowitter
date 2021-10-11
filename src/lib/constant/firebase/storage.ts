import { firebaseInstance } from "./FBinstance";
import { getStorage, ref, uploadString } from "firebase/storage";

export const storage = getStorage(firebaseInstance);
