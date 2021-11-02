export default {
  // 모듈의 이름을 루트 하위 네임스페이스로 설정
  namespaced: true,
  // 상태 정의
  state: {
    count:0
  },
  // 상태값을 읽는 메소드 정의(getter)
  // 상태 읽기 정의(getters)
  getters: {
    getCount(state, getters, rootstate, rootGetters){ // root의 state를 불러올 수 있다.
      return state.count;
    }
  },
  // 상태값을 변경하는 동기 메소드 정의(setter)
  // 상태 변이 정의(mutation) - 동기
  mutations: {
    setCount(state, payload){
      state.count += payload;
    }
  },
  // 상태값을 변경하는 비동기 메소드 정의(setter)
  actions: {
    setCountByAsync(context, payload){  // {value: xxx, duration:3000}
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit("setCount", payload.value);
          resolve(context.state.count);
        },payload.duration)
      }).then((data)=>{
        console.log(`counter/count 상태 변경 성공: ${data}`);
      }).catch((err)=>{
        console.log(`counter/count 상태 변경 실패: ${err}`);
      })
    }
  },
}