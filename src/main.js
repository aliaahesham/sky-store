import Vue from 'vue';

import App from './App.vue';
import router from './router';

import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
  faCartPlus,
  faChevronDown,
  faChevronUp,
  faSort,
  faArrowDown91,
  faArrowDown19,
} from '@fortawesome/free-solid-svg-icons';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(
  faCartPlus,
  faChevronDown,
  faChevronUp,
  faSort,
  faArrowDown91,
  faArrowDown19
);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import './assets/scss/main.scss';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
