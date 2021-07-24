import Vue from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import router from './router';
import store from './store';

import 'tailwindcss/tailwind.css';
import '@/assets/style.css';
import '@/logger';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'UA-85440910-1',
    params: {
      send_page_view: true,
    },
  },
}, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
