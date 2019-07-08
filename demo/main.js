import Vue from 'vue'
import App from './App.vue'
import HiGeroo from "./lib/index"

Vue.config.productionTip = false;
Vue.use(HiGeroo)

new Vue({
        el: '#app',
        render: h => h(App)
    }) router,
    store,
    created: function() {

    },
    render: h => h(App)
}).$mount("#app");