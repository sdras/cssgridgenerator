import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { createI18n } from './i18n'

Vue.config.productionTip = false;

const i18n = createI18n()

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
