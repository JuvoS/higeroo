import Vue from "vue";
import App from "./App.vue";
import HiGeroo from "./lib/index.js";
Vue.use(HiGeroo);
new Vue({
    el: "#app",
    render: h => h(App)
});