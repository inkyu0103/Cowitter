import {
  setDoc,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../lib/constant/firebase/fdb";
import { User } from "../model/userModel";

class Auth {
  // 유저가 이미 존재하는지체크
  async isUserExist(uid: string) {
    const targetUser = await getDoc(doc(db, "User", uid));
    return targetUser.data();
  }

  async addUser({
    displayName,
    email,
    phoneNumber,
    photoURL,
    providerId,
    uid,
  }: User) {
    const userRef = await setDoc(doc(db, "User", uid), {
      displayName,
      email,
      phoneNumber,
      photoURL,
      providerId,
      uid,
    });
  }
}

export default new Auth();
