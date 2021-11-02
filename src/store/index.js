import Vue from 'vue'
import Vuex from 'vuex'
import counter from "./counter"
import axiosConfig from "@/apis/axiosConfig"

Vue.use(Vuex)

export default new Vuex.Store({
  // 루트 상태 정의
  state: {
    userId: "",
    authToken:"",
  },
  // 루트 상태값을 읽는 메소드 정의(getter)
  // 상태 읽기 정의(getters)
  getters: {
    getUserId(state){
      return state.userId;
    },
    getAuthToken(state){
      return state.authToken;
    }
  },
  // 루트 상태값을 변경하는 동기 메소드 정의(setter)
  // 상태 변이 정의(mutation) - 동기
  mutations: {
    setUserId(state, payload){
      state.userId = payload;
    },
    setAuthToken(state, payload){
      state.authToken = payload;
    }
  },
  // 루트 상태값을 변경하는 비동기 메소드 정의(setter)
  actions: {
    setUserIdByAsync(context, payload){
      new Promise((resolve, reject) => { // payload = {userId: xxx, duration:3000}
        setTimeout(()=>{
          context.commit("setUserId", payload.userId); // mutation을 실행하도록 한다.
          resolve(context.state.userId); // then의 매개변수로 전달된다.
        }, payload.duration);
      }).then((data) => {
        console.log(`userId 상태 변경 성공: ${data} `);
      }).catch((err)=>{
        console.log(`userId 상태 변경 실패: ${err}`);
      });
    },
    
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
    
    loadAuth(context, payload){
      context.commit("setUserId", sessionStorage.getItem("userId") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.

      // auth 토큰이 있을 경우 axios의 공통 헤더에 Authorization을 추가한다.
      if(context.state.authToken !== ""){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload){
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");

      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");

      axiosConfig.removeAuthHeader();
    }
  },
  
  // 루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  // 루트 상태
  //  ㄴㅡ 멤버 상태
  //  ㄴㅡ 주문 상태
  //  ㄴㅡ ...
  modules: {
    counter
  }
})
