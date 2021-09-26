export interface TwitModel {
  commentId: string;
  content: string;
  imgUrl: string;
  preferenceId: string;
  userInfo: UserInfo;
  twitId?: string;
  twitState: number;
  // 고치기
  timeStamp: any;
}

export interface UserInfo {
  displayName: string;
  photoURL: string;
  uid: string;
}

export interface addTwitModel {
  content: string;
  userInfo: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
  twitState: number;
}

// 트윗 id ---> doc --> prefer / comment
