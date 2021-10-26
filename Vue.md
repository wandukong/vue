# Vue.js
>SPA의 웹 페이지 화면 개발을 위한 프론트엔드(Front-end) 프레임워크

## 🔴SPA

- MPA (Multi  Page  Application) - 기존 웹 페이지
	- UI 변경시 새로운 HTML으로 DOM 생성 (멀티 페이지)
	- 서버 사이드에서 HTML을 렌더링하기 때문에 브라우저는 최소한의 기능만 요구
	- 서버의 상황에 따라 요청에서부터 응답까지 지연될 수 있음
	- 접속하는 브라우저가 많을 경우 대규모 서버사이드 인프라 스트럭처 필요

- SPA (Single Page Application)
	- 최초 HTML을 받고 DOM 생성 (싱글 페이지)
	- 이후 UI 변경은 AJAX로 DOM의 일부만 추가, 수정, 삭제
	- 프레임워크를 이용해서 일관된 코드 작성이 필요(Angular, React,  Vue)
	- 자바스크립트 코드량이 증가하여 초기 로딩 속도가 늦음
		- lazy load로 해결

<p align="center"><img src="https://user-images.githubusercontent.com/47289479/138826886-ac2b7148-91a9-47f2-a008-ae1def8f9f84.png" width=500/></p> 


## 🟠특징
<img src="https://user-images.githubusercontent.com/47289479/138826395-5bf34cc5-cc48-4184-9976-d645d044b9c6.png" width=500/>

#### 1. MVVM(Model-View-ViewModel) 패턴 사용
#### 2. 컴포넌트 기반이므로 높은 재사용성
#### 3. 양방향 데이터 바인딩(Two-way Data Binding) 지원

#### 4. 가상(Virtual) DOM 기반 렌더링 사용하므로 부분 UI 갱신이 빠름
- 가상(Virtual) DOM
	- 변화가 많은 화면을 가상 DOM(메모리에 추가로 생성되는 DOM)에서 처리하고,
	- 실제 DOM과 비교해서 변경된 부분만 리렌더링하는 방식
	- 지속적으로 데이터가 변화하는 대규모 애플리케이션에 유리

## 🟡Component 
#### Component 
- 여러 화면(페이지) 안에 배치될 수 있는 재사용 UI 객체
- HTML조각(\<template>) + JavaScript(\<script>)  + CSS(\<style>) 의 결합체
- components 폴더에 작성
#### View
- 화면 하나(페이지)를 말하며,  View는 재사용이 어려운 컴포넌트
- views 폴더에 작성

## 🟢Vue 실행 과정

1. index.html 실행
2. main.js 실행
3. main.js가 import한 App.vue를 index.html의 id가 app인 div에 넣어준다. 
```js
// main.js
new  Vue({
	router,
	render:  h  =>  h(App)
}).$mount('#app')
```
4. app.vue의 \<router-view /> 태그에 의해 home.vue 가 보여진다.



## 🔵번들링
> Vue는 webpack을 이용해서 모듈 파일들을 하나의 파일 또는 여러 파일로 합쳐짐을 의미
- 빌드시 vue 파일은 javascript 파일로 바뀐다.
	- \<template> 안의 코드들은 export default 코드 안으로 들어가 모듈이 된다.
	- 모듈들은  import 해서 사용할 수 있게 된다.
