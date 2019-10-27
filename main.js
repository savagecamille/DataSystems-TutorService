import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueDropdown from 'vue-dynamic-dropdown'
import VueKonva from 'vue-konva';
import Trend from "vuetrend"

Vue.use(Trend)
Vue.use(VueKonva);

Vue.component('vue-dropdown', VueDropdown);


//import VeeValidate from 'vee-validate'; 
/* import vSelect from 'vselect-component'
Vue.use(vSelect) */
//Vue.use(VeeValidate);  


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
