# State (상태)
> 애플리케이션이 실행할 동안 지속성을 가지고, 공유되는 컴포넌트 데이터
- 컴포넌트가 생성할 때마다(라우팅마다) 선언되는 일회성 데이터는	상태가 아니다.
- 컴포넌트가 사라져도 상태가 유지되어야 한다.
- 리프레쉬하거나, 브라우저를 닫으면 상태가 사라진다.


## 🏄‍♂️Vuex
> Vue.js의 상태 관리 패턴이자 라이브러리
- 컴포넌트간의 공유 데이터를 중앙 집중식으로 관리한다.
- 중앙 저장소 Store에서 데이터를 계층적으로 관리한다.
- 설치
	- 방법1: npm install vuex,  프로젝트에 추가적인 코드를 직접 작성
	- 방법2: vue add vuex (npm install vuex + 프로젝트에 추가적인 코드)

## 🚣‍♀️저장소(Store)
> 상태를 저장하고 있는 컨테이너이다.
- Store가 변경되면 각 컴포넌트에서는 상태의 변경 여부를 바로 알 수 있다.
- Store의 상태는 직접 변경할 수 없다.
	- 상태 추적이 가능하도록 트랜잭션인 변이(mutation)을 commit해야 한다.
	- 비동기 작업을 위해 액션(Actions)를 dispatch할 수 있다.

<img src="https://user-images.githubusercontent.com/47289479/139819866-0fb13dfb-64af-4291-aba4-7d25f45a3348.png" width=500/>

## 🏊‍♀️Store 생성
### store 생성 (src/store/index.js)
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import counter from "./counter"
import axiosConfig from "@/apis/axiosConfig"

Vue.use(Vuex); // vue와 Vuex 연동

// 저장소 생성
export default new Vuex.Store({
});
```
<hr />

### Vue 인스턴스에 store 연결 (src/main.js)
```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 추가

Vue.config.productionTip = false

new Vue({
  router,
  store, // 추가
  render: h => h(App)
}).$mount('#app')
```

## 🤽‍♀️상태 모듈 정의

### 상태 정의 (state)
```javascript
state: {
	userId: ""
},
 ``` 
 <hr/>

### 상태 읽기 정의 (getters)
-  루트 상태값을 읽는 메소드 정의
```javascript
getters: {
	getUserId(state){
		return state.userId;
	},
},
``` 
 <hr/>
 
### 상태 변이 정의 (mutations)
- 루트 상태값을 변경하는 동기 메소드 정의
```javascript
mutations: {
	setUserId(state, payload){
		state.userId = payload;
	},
},
 ``` 
 <hr/>

### 액션 정의 (actions)
- 루트 상태값을 변경하는 비동기 메소드 정의
- 비동기 작업 후에 상태 변이(mutation)를 시킨다. 
- 주로 Restful API에서 데이터를 비동기로 요청하고, 응답을 받은 후에 상태 변이를 시키는 것을 목적으로 한다.
```javascript
actions: {
	saveAuth(context, payload){ // payload = {userId: xxx, authToken: xxxx}
		// 상태 저장
		context.commit("setUserId", payload.userId);
		context.commit("setAuthToken", payload.authToken);

		// 브라우저 리프레쉬때 다시 로딩하기 위해 세션 스토리지에 저장
		sessionStorage.setItem("userId", payload.userId);
		sessionStorage.setItem("authToken", payload.authToken);

		// 로그인 성공후에 axios의 공통 헤더에 Authorization을 추가한다.
		axiosConfig.addAuthHeader(payload.authToken);
	},
},
 ``` 
 <hr/>

### 하위 상태 정의
- 루트가 아닌 자식 상태를 정의한 모듈을 가져온다.

```javascript
// root state
//  ㄴㅡ counter state
//  ㄴㅡ ...
modules: {
    counter
}
 ``` 
 <hr/>

## 🐳상태 읽기
> $store의 **state**혹은 **getters** 속성으로 접근한다.

### 루트 상태
```html
<h6>[Root State 읽기]</h6>
<p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
<p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
<p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId" /></p>
```
```javascript
getUserId() {
	// return this.$store.state.userId;
	// return this.$store.getters.getUserId; // 루트 상태일때만 가능
	return  this.$store.getters["getUserId"]; // 하위 상태일떄도 사용 가능
},
```
<hr/>

### 하위 상태
-  **getters["하위상태모듈이름/메소드이름"]** 로 접근한다.
```html
<h6>[counter State 읽기]</h6>
<p>counter/count 단방향 바인딩: {{ $store.state.counter.count }}</p>
<p>counter/count 단방향 바인딩: {{ $store.getters["counter/getCount"] }}</p>
<p>counter/count 단방향 바인딩: {{ getCount() }}</p>
<p>counter/count 단방향 바인딩: {{ computedCount }}</p>
<p>counter/count 양방향 바인딩: <input type="text" v-model="$store.state.counter.count" /></p>
```
```javascript
getCount() {
	// return this.$store.state.couter.count;
	return this.$store.getters["counter/getCount"]; 
},
```

## 🐋상태 변경

### 동기 상태 변경
- store의 **mutation**을 이용한 동기 상태 변경
	- **this.$store.commit("mutation에 정의한 메소드이름", 변경할값);**
```javascript
// root state
changeUserIdByMutation() {
	this.$store.commit("setUserId", this.userId);
},

// 하위 state
changeCountByMutation() {
	this.$store.commit("counter/setCount", this.value);
},
```
<hr/>

### 비동기 상태 변경
- store의 **actions**을 이용한 비동기 상태 변경
	- **this.$store.dispatch("actions에 정의한 메소드이름", 변경할값);**
```javascript
// root state
changeUserIdByAction() {
	this.$store.dispatch("setUserIdByAsync", { userId: this.userId, duration:  3000 });
},

// 하위 state
changeCountByAction() {
	this.$store.dispatch("counter/setCountByAsync", { value: this.value, duration:  3000 });
},
```
