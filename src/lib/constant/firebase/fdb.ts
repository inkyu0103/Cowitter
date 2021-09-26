import { getFirestore } from "firebase/firestore";
import { firebaseInstance } from "./FBinstance";
export const db = getFirestore(firebaseInstance);
