
# Axios
> REST API 클라이언트 라이브러리 
- HTTP 요청을 Promise 기반으로 처리
	- axios의 모든 메소드는 **promise를 return** 한다.
	- 최신 javascript와 호환이 잘 된다.
- 설치 
	- npm install axios

## ⚔비동기 처리
- 시간이 다소 걸리는 작업을 비동기 처리한다.
	- 외부 REST API를 사용할 경우

### 방법1 : Promise를 직접 이용
- resolve() 메소드의 매개변수에는 비동기 작업이 성공할 경우에 넘겨줄 데이터 값을 넣어준다.
- reject() 메소드의 매개변수에는 비동기 작업이 실패할 경우에 넘겨줄 데이터 값을 넣어준다. 
      
```javascript
work() {
  const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("가쟈!!!");
	}, 3000);
  });
  return promise;
},

handleBtn1() {
  this.loading = true;
  this.work()
	.then((result) => {
	  this.result = result;
	})
	.catch((error) => {})
	.finally(() => {
	  this.loading = false;
	});
},
```
<hr/>

### 방법2 : async / await 이용
- **await** 동기 작업으로 실행하게 한다.
```javascript
work() {
  const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("가쟈!!!");
	}, 3000);
  });
  return promise;
},

async handleBtn2() {
  this.loading = true;
  try {
	const result = await this.work(); 
	this.result = result;
  } catch (error) { //
  } finally { //
  }
},
```

## 💣Axios 모듈 생성

```javascript
import axios from "axios"

// 기본 경로 설정
axios.defaults.baseURL = "http://localhost";

// 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
  axios.defaults.headers.common['Authorization'] = `bearer ${authToken}`;
}

// 요청 http에 Authorization 헤더 제거
function removeAuthHeader(){
  delete axios.defaults.headers.common['Authorization'];
}

// 객체 내보내기
export default {
  addAuthHeader,
  removeAuthHeader
}
```

## 🔨Axios 설정 파일
```javascript
import axios from "axios"

// 기본 경로 설정
axios.defaults.baseURL = "http://localhost";

// 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
  axios.defaults.headers.common['Authorization'] = `bearer ${authToken}`;
}

// 요청 http에 Authorization 헤더 제거
function removeAuthHeader(){
  delete axios.defaults.headers.common['Authorization'];
}

// 객체 내보내기
export default {
  addAuthHeader,
  removeAuthHeader
}
```

## 🏹앱 시작시 Axios 설정 파일 실행
#### main.js
```javascript
// Axios 설정 파일을 가져오면서 실행하기
// axios.defaults.baseURL을 먼저 적용
import  axios  from  './apis/axiosConfig'
```

## 🗡Auth 통신 모듈  정의
```javascript
import axios from "axios";

function join(user){ // user = {id: xxx, name:xxx, password:xxx, role:xxx, email: xxx}
  // axios의 모든 메소드는 promise를 return 한다.
  return axios.post(
    "/member/join2",
    // json으로 보낼때는 객체로 보낸다.
    {
      mid : user.id,
      mname: user.name,
      mpassword:user.password,
      mrole: user.role,
      memail:user.email
    }
  );
}

function login(user){ // user = {id: xxx, password:xxx}
  return axios.post(
    "/member/login1",
    // 쿼리스트링으로 보낼 때는, 백틱을 사용한다.
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login
}
```