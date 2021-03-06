import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'tailwindcss/tailwind.css';
import '@/assets/style.css';
import '@/logger';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
