import { addDoc, collection, updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/constant/firebase/fdb";
class Comment {
  async getComment(commentId: string) {
    const commentSnap = await getDoc(doc(db, "Comment", commentId));
  }
}

export default new Comment();
