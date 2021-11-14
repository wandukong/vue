import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Axios 설정 파일을 가져오면서 실행하기
// axios.defaults.baseURL을 먼저 적용
import axios from './apis/axiosConfig'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
