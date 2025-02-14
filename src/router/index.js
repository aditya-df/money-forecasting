import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../pages/HomeView.vue";

const routes = [{ path: "/", component: HomeView }];

export default createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
