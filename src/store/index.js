import Vue from 'vue'
import Vuex from 'vuex'
import counter from "./counter"

Vue.use(Vuex)

export default new Vuex.Store({
  // 루트 상태 정의
  state: {
    userId: "",
  },
  // 루트 상태값을 읽는 메소드 정의(getter)
  // 상태 읽기 정의(getters)
  getters: {
    getUserId(state){
      return state.userId;
    }
  },
  // 루트 상태값을 변경하는 동기 메소드 정의(setter)
  // 상태 변이 정의(mutation) - 동기
  mutations: {
    setUserId(state, payload){
      state.userId = payload;
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
