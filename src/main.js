import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueProgressBar from 'vue-progressbar'
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';


Vue.use(VueProgressBar, {
  color: '#2196F3',
  failedColor: 'red',
  height: '3px'
})

Vue.filter('capitalize', function(text){
  if(!text) return ''
  text = text.toString()
  return text.charAt(0).toUpperCase() + text.slice(1)
})

 
Vue.filter('numFormat', numFormat(numeral));

const axios = require('axios').default;
window.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
