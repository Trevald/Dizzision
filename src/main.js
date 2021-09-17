import Vue from "vue";
import App from "./App.vue";
import "@/assets/main.css";

/*
import VueRouter from 'vue-router'
Vue.use(VueRouter)
*/

import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);

/*
import Index from "./components/Index"

const routes = [
    { path: "/", component: Index },
    { path: "/:id", component: Index }
]

const router = new VueRouter({
    mode: 'history',
    routes
});
*/
Vue.config.productionTip = false;

new Vue({
    // router,
    render: (h) => h(App),
}).$mount("#app");
