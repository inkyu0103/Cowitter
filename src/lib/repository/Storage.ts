import { storage } from "../constant/firebase/storage";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
class Storage {
  async getMyStorageRef(uuid: string) {
    const myStorage = await ref(storage, uuid);
    return myStorage;
  }

  async getFileRef({ storageRef, path }: any) {
    const fileRef = await ref(storageRef, path);
    return fileRef;
  }

  async uploadFile({ fileRef, file }: any) {
    return await uploadString(fileRef, file, "data_url");
  }

  async getImageUrl({ storageRef, path }: any) {
    const response = await getDownloadURL(ref(storageRef, path));
    return response;
  }
}

export default new Storage();

/*
  음... 
  - 이미지 미리보기
  이미지 올림 -->
  setTwit--> 상태를 가지고 있다가
  twitObj로 이름을 바꾸자.

  
  
  cowit 누르면
  자신의 storgae 객체를 얻어오자. 근데 매번 ... 들고 오면 조금 그러니까 일단 
  지금은 매번 불러오는 것으로 하고 storage 셋팅을 하자.
np
  그러면 fileRef = ref(storage,`/${uid}/${twitobj.name})
  uploadString(fileRef,twitobj.file)
  url을 주면 되겟따.
  
  트윗을 올려야만 url로 바꾼 후 받아오자.





*/
