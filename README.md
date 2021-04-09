# Clone OP.GG

## 프로젝트 구조

    .
    ├── .vscode                 # vscode 환경설정 파일
    ├── public                  # index.html 파일
    ├── src                     # 소스 파일
    │   ├── assets              # style 관리. styled-component 기반으로 global style 및 theme 관리
    │   ├── components          # 컴포넌트 관리
    │   ├── hooks               # 커스텀 훅 관리
    │   |   ├── fetch           # API fetch 관련 커스텀 훅
    │   |   └── storage         # Local Storage 접근 관련 커스텀 훅
    │   ├── layout           # Header, Container 와 같은 공통 레이아웃 관리
    │   ├── lib                 # 단위 모듈 관리
    │   |    └── storage        # 로컬 스토리지 관리
    │   ├── model               # 모델 타입 관리
    │   ├── pages               # 페이지 관리
    │   └── App.tsx             # App
    │   └── index.tsx           # entry point
    ├── .gitignore              # git ignore
    ├── .prettier               # prettier 설정 파일
    ├── .package-lock.json      # package 관련 파일
    ├── .package.json           # package 관련 파일
    ├── .prettier               # prettier 설정 파일
    ├── README.md              # README
    ├── tsconfig.json           # ts 환경 설정 파일
    └── ...

## 사용된 기술 스펙

- Typescript
- React
- Dayjs
- Styled-component
- lodash
- SWR

## 시작하기

```
$ npm i
$ npm start
```
