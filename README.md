# Cowitter (Coin + Twitter)

## 1. 기술 스택

- Typescript
- React **(without CRA)**
- Emotion.js
- Firebase
- Webpack
- babel

## 2. 개발일정

|    날짜    |         내용         |
| :--------: | :------------------: |
| 2021.09.18 |    기본 환경 세팅    |
| 2021.09.19 |  사용되는 화면 설정  |
| 2021.09.20 | illeagal iFrame 해결 |
| 2021.09.22 | react toolkit & 설정 |
| 2021.09.23 |      구조 변경       |

## 3. git Flow

- **feat** : 새로운 기능 추가
- **fix** : 오류 해결
- **refactor** : 내용 변경은 없이, 코드가 바뀌는 경우
- **format** : 간단한 코드 변경
- **style** : 스타일 바뀌는 경우
- **doc** : readmd 문서 정리
- **chore** : package.json , tsconfig.json 등등...

## 4. 구현 기능 정리

### 화면구성

**레이아웃**

- [ ] 옆 화면 (아이콘 , 홈 , 노티피케이션 , 저장, Profile )
- [ ]

**페이지**

- [ ] 프로필 페이지
- [ ]

**공통 컴포넌트**

- [ ] 글쓰기
- [ ] 댓글 쓰기
- [ ] 트윗 올라오는 부분
- [ ] Trends

### 로직구성

- [x] 로그인
- [x] 로그아웃
- [x] 회원가입 (소셜로그인만)

---

- [ ] 개인 글쓰기 / 구독한 아이들 twit 긁어오기
- [ ] follow (가능하다면)
- [ ] 코인 검색 (구독한 아이들 가격 보여주기)
- [ ] sell / buy cowit 날리기.

## 5. DB 구성

User{
google Provider : Name ,Url
coin selected:
saved twit
친구관리 등등
}

좋아요 기능

Twit {
WriterInfo :{ --> ref로 끼워넣고 Join을 시킬까?
uid:string;
photoURL : string;
},
content:string,
imageURL:string,
state:number (buy/sell) # 추후 like
}
