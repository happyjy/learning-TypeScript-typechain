# Typechain
Learning Typescript by making a Blockchain with it
# 동작 방법
yarn prettier-watch
yarn start

# package.json
* command: npm int 
* 프로젝트에서 사용할 node 모듈 관리 설정 파일이다. 
* [doc](https://docs.npmjs.com/creating-a-package-json-file)


# prettier, eslint 설정
* https://khalilstemmler.com/blogs/tooling/prettier/
* npm run prettier-watch 실행 후 저장하 ts 파일 자동정렬 
# TS 설정
tsconfing.json 설정 방법 문서 확인하기
https://www.youtube.com/watch?v=-dyrcJr5NiQ&feature=emb_title

* 방법
  - tsconfig.json 파일 생성
* 설정 요소 설명
  - complierOptions
    - module: "commonjs" - node.js를 사용, import, export 사용가능
    - target: 어떤 버턴 js로 컴파일 되고 싶은지
    - sourceMap: sourceMap 처리 여부 
    - outDir: 생성된 js, js.map 파일 위치 폴더 
  - include - 어떤 파일이 컴파일에 포함되는지 

* 터미널 > "tsc"
  * ts 파일 컴파일하면 **.js, **.js.map 파일을 만든다.

* 저장시 자동으로 수항할 코드
  - yarn install tsc-watch --save-dev
    - 어떤 사람들은 이렇게 하라고 함 => yarn install typesript, npm install -g typescript
    - https://nomadcoders.co/typescript-for-beginners/lectures/1648

  - [npm tsc-watch](https://www.npmjs.com/package/tsc-watch)
  - package.json 설정
    ```js
      "scripts": {
        "start": "tsc-watch --onSuccess \" node dist/index.js\"
      }
    ```
  - tsconfig.json에 watch 옵션 추가 
    ```json
      "compilerOptions": {
        "watch": true
      }
    ```
    

# TS 설치
* yarn global add typescript

# 블로체인 구조 만들기 
[Typescript로 블록체인 만들기- #7 Blockchain Creating a Block](youtube.com/watch?v=0nOjxJUuuCo)

[Typescript로 블록체인 만들기 - #10 Validating Block Structure](https://www.youtube.com/watch?v=oX_qbVdRZ60)
* 구조 유효체크 개발 
