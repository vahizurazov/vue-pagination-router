import Vue from "vue";
import Router from "vue-router";
import First from "./router/First";
import Second from "./router/Second.vue";
import Third from "./router/Third.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/first",
      component: First
    },
    {
      path: "/second",
      component: Second
    },
    {
      path: "/third",
      component: Third
    }
  ]
});
