export interface TwitModel {
  commentId: string;
  content: Content;
  preferenceId: string;
  userInfo: UserInfo;
  twitId?: string;
  twitState: number;
  timeStamp: any;
}

export interface UserInfo {
  displayName: string;
  photoURL: string;
  uid: string;
}

export interface addTwitModel {
  content: Content;
  userInfo: {
    displayName: string;
    photoUrl: string;
    uid: string;
  };
  twitState: number;
}

export interface Content {
  content: string;
  imageUrl: string;
}
// 트윗 id ---> doc --> prefer / comment
