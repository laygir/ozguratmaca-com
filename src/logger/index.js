import Vue from 'vue';
import VueLogger from 'vuejs-logger';

const isProduction = process.env.VUE_APP_ENV === 'production';

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: ':',
  showConsoleColors: true,
};

Vue.use(VueLogger, options);
