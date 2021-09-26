import { addDoc, collection, updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/constant/firebase/fdb";
class Prefer {
  async getPrefer(twitId: string) {
    const twitSnap = await getDoc(doc(db, "Twit", twitId));
    const {commentId,preferenceId} = twitSnap.data();
    
  }
}

export default new Prefer();
