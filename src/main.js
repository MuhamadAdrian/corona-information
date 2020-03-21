import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#00A053',
  failedColor: 'red',
  height: '3px'
})

import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
 
Vue.filter('numFormat', numFormat(numeral));

const axios = require('axios').default;
window.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
