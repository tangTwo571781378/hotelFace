import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http= axios.create({
	baseURL:'http://gs-api.uface.uni-ubi.com'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

