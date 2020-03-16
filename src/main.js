import Vue from "vue";
import App from "./App.vue";
import vuePlugin from "./plugins/index";
//自定义指令引入
import "./detectives";
Vue.config.productionTip = false;
//注册插件
Vue.use(vuePlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
