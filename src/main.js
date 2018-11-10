import Vue from 'vue'
import App from './components/App'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
