export interface TwitModel {
  // id가 string인지 아닌지 봐야함.
  // user 부분을 어떻게 처리할지 봐야함
  userId?: string;
  userPhotoUrl?: string;
  userName?: string;
  twitId: string;
  title: string;
  content: string;
}
