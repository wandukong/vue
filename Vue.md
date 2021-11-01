
# Vue.js
>SPA의 웹 페이지 화면 개발을 위한 프론트엔드(Front-end) 프레임워크

### Vue 실행 과정

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
### Component (공통 요소 컴포넌트)
- 여러 화면(페이지) 안에 배치될 수 있는 재사용 UI 객체
- HTML조각(\<template>) + JavaScript(\<script>)  + CSS(\<style>) 의 결합체
- components 폴더에 작성
<hr />

### View (화면 컴포넌트)
- 화면 하나(페이지)를 말하며,  View는 재사용이 어려운 컴포넌트
- views 폴더에 작성
<hr />

### 싱글 파일 컴포넌트 구조
- \<template> | \<script>  | \<style> 태그로 구성
- \<template>
	- 화면에 표시할 요소들을 정의하는 영역
	- 컴포넌트가 렌더링될 때 화면에 보여줄 부분을 HTML 태그로 작성
	- 데이터 바인딩을 위한 표현식  **{{...}}** 사용
	- **디렉티브(v-*)** 를 이용해서 데이터 바인딩, 이벤트 처리 및 동적 화면 제어
- \<script> 
	- 뷰 컴포넌트의 내용을 정의하는 내용
	- 컴포넌트 이름 선언
	- 컴포넌트 데이터 선언
	- 컴포넌트 이벤트 처리를 위한 메소드 선언
	- 컴포넌트 리사이클 훅 선언
	- 데이터 바인딩을 위한 선언
	- 데이터 및 상태 감시를 위한 선언
-  \<style>
	- 탬플릿에 추가한 HTML 태그의 CSS 스타일을 정의하는 영역
	- scoped가 생략되면 전역 style
	- scoped가 추가되면 싱글 파일 컴포넌트에서만 사용되는 지역 style







## 🟢번들링
> Vue는 webpack을 이용해서 모듈 파일들을 하나의 파일 또는 여러 파일로 합쳐짐을 의미
- 빌드시 vue 파일은 javascript 파일로 바뀐다.
	- \<template> 안의 코드들은 export default 코드 안으로 들어가 모듈이 된다.
	- 모듈들은  import 해서 사용할 수 있게 된다.

## 🔵Vue Router
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
// 라우트 정의
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
<hr/>

## 🟣URL 데이터 전달

### path variables(param)로 전달
- 라우트에 정의할 때 path에 **:bno**로 **path variable**이라고 명시한다.
- **route 객체의 params 속성**을 참조하여, param 값을 얻는다.
	- **javascript : this.$route.params.bno**
	- **template : $route.params.bno**
```html
<!-- Exam05View.vue -->
<li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
<li><router-link v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
<li><router-link :to="{ path: `/menu01/exam06view/${bno2}` }">exam06view/5</router-link></li>
<li><router-link :to="{ name: 'menu01_exam06view', params: { bno: bno3 } }">exam06view/7</router-link></li>
```
```javascript
// Exam05View.vue
export default {
  name:  "Exam05View",
  data: () => ({
    bno1:  3,
    bno2:  5,
    bno3:  7,
  }),
}
```
```javascript
// 라우트 정의
{
  path:"/menu01/exam06view/:bno",
  name:"menu01_exam06view",
  component: () =>  import(/* webpackChunkName: "menu01" */  '../views/menu01/Exam06View'),
  props: true // path variable을 props로 전달하겠다.
}
```
```javascript
// Exam06View.vue
export default {
  name: "Exam06View",
  created() {
    console.log("Exam06View 컴포넌트가 생성됨");
    console.log(this.$route);
    console.log(this.$route.params.bno);
  },
  props: ["bno"],
};
```
```html
<!-- Exam06View.vue -->
<div>bno: {{ $route.params.bno }}</div> <!-- 라우트 객체로 전달 받음 -->
<div>bno: {{ bno }}</div> <!-- props로 전달 받음 -->
```
<hr />


### 정적 객체로 전달
- **props**를 이용하여 정적 객체로 전달한다.
	- 라우트에서 정의한 정적 객체들을 사용하기 위해서, 라우팅되는 vue파일에서 props 변수들을 지정해줘야 한다.
```html
<!-- Exam05View.vue -->
<li><router-link to="/menu01/exam07view">exam07view</router-link></li>
```
```javascript
// 라우트 정의
{
  path:"/menu01/exam07view",
  component: () =>  import(/* webpackChunkName: "menu01" */  '../views/menu01/Exam07View'),
  // Exam07View에서 아래의 정적 객체들을 사용할 수 있다.
  props: {kind:"freeboard", color:"blue"}
},
```
```javascript
// Exam07View.vue
export default {
	...,
	props: ["kind", "color"],
};
```
```html
// Exam07View.vue
<p>kind : {{ kind }}</p>
<p>color : {{ color }}</p>
```
<hr/>

### 쿼리 스트링으로 전달
- **route 객체의 query 속성**을 참조하여, param 값을 얻는다.
	- **javascript : this.$route.query.kind**
	- **template : $route.query.kind**
```html
<!-- Exam05View.vue -->
<li><router-link  to="/menu01/exam08view?kind=freeboard&color=blue">exam08view?kind=freeboard&color=blue</router-link></li>
<li><router-link :to="`/menu01/exam08view?kind=${kind1}&color=${color1}`">exam08view?kind=freeboard&color=blue</router-link></li>
<li><router-link :to="{ path: `/menu01/exam08view?kind=${kind2}&color=${color2}` }">exam08view?kind=album&color=red</router-link></li>
<li><router-link :to="{ name: 'menu01_exam08view', query: { kind:  kind3, color:  color3 } }">exam08view?kind=qa&color=yellow</router-link></li>
```

```javascript
// Exam05View.vue
export default {
  name:  "Exam05View",
  data: () => ({
    kind1: "freeboard",
    color1: "blue",
    kind2: "album",
    color2: "red",
    kind3: "qa",
    color3: "yellow",
  }),
}
```
```javascript
// 라우트 정의
{
  path:"/menu01/exam08view",
  name:"menu01_exam08view",
  component: () =>  import(/* webpackChunkName: "menu01" */  '../views/menu01/Exam08View'),
  // props로도 전달할 경우 추가
  props: (route) => ({
    kind:  route.query.kind,
    color:  route.query.color
  })
}
```
```javascript
// Exam08View.vue
export default {
  name: "Exam08View",
  created() {
    console.log(this.$route);
    console.log(this.$route.query.kind);
    console.log(this.$route.query.color);
  },
  props: ["kind", "color"],
};
```
```html
<!-- Exam08View.vue -->
<p>kind : {{ $route.query.kind }}</p> <!-- 라우트 객체로 전달 받음 -->
<p>color : {{ $route.query.color }}</p>

<p>kind : {{ kind }}</p>  <!-- props로 전달 받음 -->
<p>color : {{ color }}</p>
```
<hr />

## 🟤데이터 바인딩

- 단방향 바인딩(one-way binding)
	- 컴포넌트의 데이터가 변경되면 UI 요소 내용 변경

- 양방향 바인딩(two-way binding)
	- 컴포넌트의 데이터 변경 <---> UI 요소의 변경
	- 주로 폼 데이터와 폼 양식간의 바인딩
<hr/>

### JavaScript 표현식

> <b>{{...}}</b>표현식을 사용한다.

```html
<p>번호: {{ no }}</p>
<p>이름: {{ name }}</p>
<p>회사: {{ company }}</p>
<p>판매여부: {{ sale ? "판매" : "품절" }}</p>
<p>가격: {{ price }}</p>
<p>가격: {{ getPrice() }}</p>
<button class="btn btn-dark btn-sm mt-2" @click="changeData">변경</button>
```
```javascript
export default {
  name: "Exam01Expressions",
  components: {},
  data: function() {
    return {
      no: 1,
      name: "미니백",
      company:"클레인",
      price: 300000,
      sale: true,
    };
  },
  methods: {
    getPrice() {
      return this.price; // 컴포넌트의 객체에 접근하려면 this를 붙인다.
    },
    changeData() {
      this.price += 1000;
      this.sale = !this.sale;
    },
  },
};
```
<hr/>

### 데이터 바인딩 디렉티브
> **v-*** (디렉티브) 표현식을 사용한다.
- 디렉티브를 사용하면 컴포넌트의 데이터를 속성의 값에 사용할 수 있다. 
- 디렉티브를 사용하면 속성의 값들은 자바스크립트로 인식한다.
```html
<img class="mr-2" src="@/assets/photos/photo1.jpg" width="300" height="200" />
<img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300" height="200" />
```
```javascript
export default {
  name: "Exam02Directives",
  components: {},
  data: function() {
    return {
      photoFileName: "photo2.jpg",
	};
  },
  methods: {
    changeData() {
	  if (this.photoFileName === "photo2.jpg") this.photoFileName = "photo3.jpg";
	  else this.photoFileName = "photo2.jpg";
	},
  },
};
```
<hr/>

### 속성 디바인딩
> 속성값으로 데이터를 바인딩하기 위해 표현식({{ … }})을 사용할 수 없음
- v-bind:속성명="…"또는 :속성명="…" 를 사용
- …에  올 수 있는 형태
	- Data속성명 또는 연산식
	- 매개변수화된 문자열일 경우 백틱(\`) 사용 :“\`… ${Data속성명} … \`” 
<hr/>

### Form 입력 데이터 바인딩(양방향 바인딩)
> **v-model** 속성을 사용한다.
```html
<form v-on:submit.prevent="handleSubmit">
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Name</label>
	  <div class="col-sm-10">
		<input type="text" class="form-control" v-model="product.name" />
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Company</label>
	  <div class="col-sm-10">
		<input type="text" class="form-control" v-model="product.company" />
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Price</label>
	  <div class="col-sm-10">
		<input type="number" class="form-control" v-model.number="product.price" />
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Info</label>
	  <div class="col-sm-10">
		<textarea class="form-control" v-model="product.info"></textarea>
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Madein</label>
	  <div class="col-sm-10">
		<select class="form-control" v-model="product.madein">
		  <option value="미국">미국</option>
		  <option value="한국">한국</option>
		  <option value="독일">독일</option>
		</select>
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Sale1</label>
	  <div class="col-sm-10">
		<div class="form-check">
		  <input type="checkbox" class="form-check-input" v-model="product.sale1" />
		  <label class="form-check-label">판매여부</label>
		</div>
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Colors</label>
	  <div class="col-sm-10">
		<div class="form-check">
		  <input type="checkbox" class="form-check-input" value="black" v-model="product.colors" />
		  <label class="form-check-label">black</label>
		</div>
		<div class="form-check">
		  <input type="checkbox" class="form-check-input" value="white" v-model="product.colors" />
		  <label class="form-check-label">white</label>
		</div>
		<div class="form-check">
		  <input type="checkbox" class="form-check-input" value="red" v-model="product.colors" />
		  <label class="form-check-label">red</label>
		</div>
		<!-- v-model이 동일하기 때문에 그룹으로 뭍김-->
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Sale2</label>
	  <div class="col-sm-10">
		<div class="form-check">
		  <input type="checkbox" class="form-check-input" v-model="product.sale2" true-value="yes" false-value="no" />
		  <label class="form-check-label">판매여부</label>
		</div>
	  </div>
	</div>
	<div class="form-group row">
	  <label class="col-sm-2 col-form-label">Sex</label>
	  <div class="col-sm-10">
		<div class="form-check">
		  <input type="radio" class="form-check-input" v-model="product.sex" value="man" />
		  <label class="form-check-label">Man</label>
		</div>
		<div class="form-check">
		  <input type="radio" class="form-check-input" v-model="product.sex" value="woman" />
		  <label class="form-check-label">Woman</label>
		</div>
	  </div>
	</div>

	<div>
	  <button class="btn btn-sm btn-primary mr-2" v-bind:disabled="disabledRegButton">등록</button>
	  <router-link to="/" class="btn btn-sm btn-danger">취소</router-link>
	</div>
</form>
```
```javascript
data() {
	return {
	  product: {
		name: "",
		company: "",
		price: 0,
		colors: [],
		info: "",
		madein: "한국",
		sale1: false,
		sale2: "no",
		sex: "woman",
	  },
	};
},
```
<hr />

### For 반복 바인딩
- **v-for** 속성 이용
```html
<태그 v-for="(item, index) in 배열" [ v-if=“item조건식”] :key=“항목식별값|index”>…</태그>
<태그 v-for="(value, name, index) in 객체" [v-if=“조건식”] v-bind:key=“항목식별값|index”>… </태그>
<태그 v-for="n in 10" [ v-if=“조건식”] v-bind:key=“n”> … </태그>
```
- v-for와 v-if는 사용하지 않는 것이 좋다.
	- 최신 vue2.x 는 기본적으로 Compile  error 발생 
	- .eslintrc.js에 다음과 같이 추가하면 사용 가능
```javascript
rules: {
	…,
	"vue/no-use-v-if-with-v-for": "off"
}
```

```html
<span v-for="n in 10" :key="n" class="mr-2">
	<img v-bind:src="require(`@/assets/photos/photo${n}.jpg`)" width="300" height="200" v-if="n % 2 === 0" />
</span>
<hr />

<h6>배열 항목 반복</h6>
<div>
	<span v-for="(photo, index) in photos" :key="index">
	<img v-bind:src="require(`@/assets/photos/${photo}`)" width="300" height="200" v-if="index <= 1" />
	</span>
</div>
<hr />

<h6>객체 항목 반복</h6>
<table class="table table-bordered">
	<thead>
		<tr>
			<th>No</th>
			<th>Title</th>
			<th>Writer</th>
			<th>Date</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="board in boards" :key="board.bno">
			<td>{{ board.bno }}</td>
			<td>{{ board.btitle }}</td>
			<td>{{ board.bwriter }}</td>
			<td>{{ board.bdate }}</td>
		</tr>
	</tbody>
</table>
```
<hr/>

### Computed 바인딩
> 데이터를 가공한 새로운 값을 생성해서 바인딩할 목적으로 사용
- 정의 형태는 리턴값있는 메소드이지만, 사용은 속성처럼 사용한다.
- 데이터가 변경되지 않으면 캐싱된 이전 값을 바인딩하므로 메소드가 재실행하지 않는다.
- 데이터가 변경되면 자동으로 메소드가 실행되고 리턴 값으로 새로 캐싱한다.

```html
<div>
	<p>ssn(getSsn): {{ getSsn() }}</p>
	<p>ssn(computedSsn): {{ computedSsn }}</p>
</div>
<button @click="changeData" class="btn btn-sm btn-dark" mt-2>변경</button>
```
```javascript
data() {
    return {
		ssn1: "960106",
		ssn2: "1235825",
		date: new Date(),
	};
},
methods: {
	getSsn() {
		console.log("getSsn 실행");
		return this.ssn1 + " - " + this.ssn2.charAt(0) + "******";
	},
	changeData() {
	  this.date = new Date();
	  this.ssn2 = "2220123";
	},
},

computed: {
	computedSsn() {
		console.log("computedSsn 실행");
		return this.ssn1 + " - " + this.ssn2.charAt(0) + "******";
	},
},
```
<hr/>

## ⭕템플릿 컴포넌트
- 템플릿 컴포넌트 필요성
	- 컴포넌트 중에서는 구조가 동일하고 내용만 다른 경우가 있음
```html
<template>
  <modal-dialog-template>
    <template v-slot:header>
      DialogA
    </template>
    
    <template v-slot:body>
      DialogA 내용입니다.
    </template>
    
    <template v-slot:footer>
      <button class="modal-default-button btn btn-sm btn-dark mr-2" @click="$emit('close')">확인</button>
      <button class="modal-default-button btn btn-sm btn-dark mr-2" @click="$emit('close')">닫기</button>
    </template>
  </modal-dialog-template>
</template>
```
```html
<template>
  <modal-dialog-template>
    <template v-slot:header>
      로그인
    </template>

    <template v-slot:body>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" autocomplete="email" />
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" autocomplete="new-password" />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label">Check me out</label>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <button class="btn btn-info btn-sm" @click="$emit('close')">로그인</button>
      <button class="btn btn-info btn-sm" @click="$emit('close')">취소</button>
    </template>
  </modal-dialog-template>
</template>
```
- 템플릿 컴포넌트 작성
	- 컴포넌트마다 바뀌는 내용 부분은 <slot> 으로 지정
```html
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              제목
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              내용
            </slot>
          </div>
          
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button btn btn-sm btn-dark" @click="$emit('close')">닫기</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
```
```html
<div class="card-body">
  <button class="btn btn-sm btn-danger mr-2" @click="modalDialogTemplate = true">show ModalDialogTemplate</button>
  <button class="btn btn-sm btn-warning mr-2" @click="dialogA = true">show DialogA</button>
  <button class="btn btn-sm btn-success" @click="dialogB = true">show DialogB</button>
</div>
<modal-dialog-template v-if="modalDialogTemplate" @close="modalDialogTemplate = false" />
<dialog-a v-if="dialogA" @close="dialogA = false" />
<dialog-b v-if="dialogB" @close="dialogB = false" />
```
```javascript
export default {
  name: "Exam07Template",
  components: { ModalDialogTemplate, DialogA, DialogB },
  data() {
    return {
      modalDialogTemplate: false,
      dialogA: false,
      dialogB: false,
    };
  },
};
```