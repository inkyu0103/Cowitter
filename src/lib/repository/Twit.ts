import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../lib/constant/firebase/fdb";
import { addTwitModel } from "../model/twitModel";

class Twit {
  async addTwit({ content, userInfo, twitState }: addTwitModel) {
    const twitRef = await addDoc(collection(db, "Twit"), {
      commentId: null,
      content,
      preferenceId: null,
      userInfo,
      twitState,
      timesStamp: Timestamp.now(),
    });

    const commentRef = await addDoc(collection(db, "Comment"), {
      twitId: twitRef.id,
      content: [],
    });

    const preferenceRef = await addDoc(collection(db, "Preference"), {
      twitId: twitRef.id,
      like: 0,
    });

    await updateDoc(twitRef, {
      commentId: commentRef,
      preferenceId: preferenceRef,
    });
  }

  async getTwits() {
    const twitRef = await getDocs(collection(db, "Twit"));

    const result: any = [];

    twitRef.forEach((twit) => {
      const data = twit.data();
      data.twitId = twit.id;
      result.push(data);
    });
    console.log("result is ", result);
    return result;
  }

  async deleteTwit(twitId: string) {
    await deleteDoc(doc(db, "Twit", twitId));
  }
}

export default new Twit();
