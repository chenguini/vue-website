// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-svg-icon/Icon.vue'
import axios from 'axios'
import loading from './components/Loading'

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.prototype.$http = axios
Vue.component('loading', loading)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
  			App
		},
  template: '<App/>'
})
