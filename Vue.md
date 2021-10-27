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

## 🟣Vue Router
> Vue에서 라우팅 기능을 제공하는 공식 라이브러리

### 라우팅
> URL 주소에 따라 페이지가 전환되는 것
> Vue는 URL 주소에 따라 화면 컴포넌트인 View가 전환
<hr/>

### 라우터 모듈
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter) // Vue에서 VueRouter를 사용하도록 설정

// 라우트 정의 배열 생성
const routes = [ 
  {
	path: '/',       // url
	name: 'Home',	 // 라우트 이름
	component: Home  // 보여줄 View 컴포넌트
  },
  {
	path: '/about',
    name: 'About',
								    // 번들 파일 지정            @/view/About.vue
    component: () =>  import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
  
// 라우터 인스턴스 생성
const  router = new  VueRouter({
  mode:  'history',      		// URL 전환시 history 객체 이용(URL에 #이 안붙음)
  base:  process.env.BASE_URL,  // 루트 경로 설정(기본값:/)
  routes                        // 라우트 정의 배열 지정 (routes:routes)
})

export default router // 라우터를 기본 내보내기 (모듈)
```
<hr/>

### 뷰 전환 방법

- 선언적 방식
	- v-bind:to/:to 에는 바인딩문자열 또는 객체를 포함시킬수 있다.
```html
<router-link to="정적 문자열">링크문자열</router-link>
<router-link v-bind:to="바인딩문자열 또는 객체">링크문자열</router-link>
<router-link :to="바인딩문자열 또는 객체">링크문자열</router-link>

<router-link to="/menu01/exam02view" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
<router-link v-bind:to="`/menu01/exam02view`" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
<router-link :to="{ path: '/menu01/exam02view' }" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
<router-link :to="{ name: 'menu01_exam02view' }" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
```

-  프로그래밍 방식
```html
<button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
<button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
<button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
<button class="btn btn-info btn-sm" @click="goUrl()">/menu01/exam01view</button>
```
```javascript
methods: {
  goUrl() {
	this.$router.push("/menu01/exam02view");
	// this.$router.push({path:"/menu01/exam02view"});
	// this.$router.push({name:"menu01_exam02view");
    
    /* 현재 URL과 동일한 URL로 화면 이동을 할 경우 예외가 발생하므로 예외 처리 코드 필요
    this.$router.push("/menu01/exam02view")
     .then(() => {})
     .catch(() => {});
    */
  },
}
```
<hr/>

### 중첩된 라우트
> 서브 URL에 따라 컴포넌트를 선택해서 보여줌
- 선언적 방식
```html
<h6>선언적 방식 컴포넌트 전환(화면 이동)</h6>
<router-link to="/menu01/exam03view/subacomponent" class="btn btn-sm btn-success mr-2">SubAComponent</router-link>
<router-link to="/menu01/exam03view/subbcomponent" class="btn btn-sm btn-success">SubBComponent</router-link>
<div class="mt-2">
  <router-view />
</div>
```
```javascript
// router/index.js
{
  path:"/menu01/exam03view",
  component: () =>  import(/* webpackChunkName: "menu01" */  '../views/menu01/Exam03View'),
  children:[
    {
      path:"subacomponent",
      component: () =>  import(/* webpackChunkName: "menu01" */  '../components/menu01/SubAComponent'),
    },
    {
      path:"subbcomponent",
      component: () =>  import(/* webpackChunkName: "menu01" */  '../components/menu01/SubBComponent'),
    }
  ]
}
```
- 프로그래밍 방식
```html
<h6 class="mt-2">프로그래밍 방식 컴포넌트 전환(화면 이동)</h6>
<button @click="goUrl('a')" class="btn btn-sm btn-primary mr-2">SubAComponent</button>
<button @click="goUrl('b')" class="btn btn-sm btn-primary mr-2">SubBComponent</button>

<div class="mt-2">
  <router-view />
</div>
```
```javascript
methods: {
  goUrl(type) {
    this.$router.push(`/menu01/exam03view/sub${type}component`).catch(() => {});
  },
}
```