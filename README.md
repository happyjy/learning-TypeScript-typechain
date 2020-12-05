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
[?] tsconfing.json 설정 방법 문서 확인하기
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


# package.json
* command: npm int 
* íë¡ì í¸ìì ì¬ì©í  node ëª¨ë ê´ë¦¬ ì¤ì  íì¼ì´ë¤. 
* [doc](https://docs.npmjs.com/creating-a-package-json-file)


# prettier, eslint ì¤ì 
* https://khalilstemmler.com/blogs/tooling/prettier/
* npm run prettier-watch ì¤í í ì ì¥í ts íì¼ ìëì ë ¬ 
# TS ì¤ì 
[?] tsconfing.json ì¤ì  ë°©ë² ë¬¸ì íì¸íê¸°
https://www.youtube.com/watch?v=-dyrcJr5NiQ&feature=emb_title

* ë°©ë²
  - tsconfig.json íì¼ ìì±
* ì¤ì  ìì ì¤ëª
  - complierOptions
    - module: "commonjs" - node.jsë¥¼ ì¬ì©, import, export ì¬ì©ê°ë¥
    - target: ì´ë¤ ë²í´ jsë¡ ì»´íì¼ ëê³  ì¶ìì§
    - sourceMap: sourceMap ì²ë¦¬ ì¬ë¶ 
    - outDir: ìì±ë js, js.map íì¼ ìì¹ í´ë 
  - include - ì´ë¤ íì¼ì´ ì»´íì¼ì í¬í¨ëëì§ 

* í°ë¯¸ë > "tsc"
  * ts íì¼ ì»´íì¼íë©´ **.js, **.js.map íì¼ì ë§ë ë¤.

* ì ì¥ì ìëì¼ë¡ ìí­í  ì½ë
  - yarn install tsc-watch --save-dev
    - ì´ë¤ ì¬ëë¤ì ì´ë ê² íë¼ê³  í¨ => yarn install typesript, npm install -g typescript
    - https://nomadcoders.co/typescript-for-beginners/lectures/1648

  - [npm tsc-watch](https://www.npmjs.com/package/tsc-watch)
  - package.json ì¤ì 
    ```js
      "scripts": {
        "start": "tsc-watch --onSuccess \" node dist/index.js\"
      }
    ```
  - tsconfig.jsonì watch ìµì ì¶ê° 
    ```json
      "compilerOptions": {
        "watch": true
      }
    ```
    

# TS ì¤ì¹
* yarn global add typescript




# ë¸ë¡ì²´ì¸ êµ¬ì¡° ë§ë¤ê¸° 
[Typescriptë¡ ë¸ë¡ì²´ì¸ ë§ë¤ê¸°- #7 Blockchain Creating a Block](youtube.com/watch?v=0nOjxJUuuCo)
