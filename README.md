# Study for gulp🍹

Velopert의 Gulp 강의 실습 결과물입니다. 강의 링크는 아래에 있습니다.

- [[Node.js] 12.1 편: GULP – JavaScript 빌드 자동화툴 알아보기 + ES6 문법으로 사용해보기](https://velopert.com/1344)
- [[Node.js] 12.2 편: GULP – 응용하기 (babel, webpack, nodemon, browser-sync)](https://velopert.com/1456)


## 참고사항 📝

앞으로 다시 공부해야할 내용을 간략히 정리했습니다. 

### `babel-preset-es2015` 👉 `babel-preset-env`

실습 중간중간 다른 레퍼런스를 찾아보다가 `babel-preset-es2015` 대신 `babel-preset-env`를 사용하기를 추천하는 글을 읽었습니다. 잘 정리해뒀어야 했는데, 어디서 봤는지 도무지 알 수가 없어서 일단 바꿨다는 걸 기록해두기 위해 글로 적어둡니다.

### `babel-loader` 버전 7.1.1.로 고정

Webpack 적용한 후, `gulp` 실행시 오류가 발생하는데 [다른 이들의 해결책](https://github.com/babel/babel-loader/issues/503)을 따라 버전을 낮춰서 진행했습니다. 
