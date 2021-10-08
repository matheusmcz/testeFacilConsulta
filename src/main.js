import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/bootstrapReset.scss';
import './styles/globalStyles.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTheMask);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
