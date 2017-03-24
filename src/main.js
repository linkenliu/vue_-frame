import Vue from 'vue'
import App from './App'
import router from './router'
import fiters from './fiters'

Vue.config.productionTip = false

import 'mint-ui/lib/style.css';


new Vue({
  el: '#app',
  router,
  fiters,
  template: '<App/>',
  components: { App }
})
