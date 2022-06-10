import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/leisure-page",
    name: "LeisurePage",
    component: () => import("@/views/TestPage.vue"),
  },
  {
    path: "/food-page",
    name: "FoodPage",
    component: () => import("@/views/Food.vue"),
  },
  {
    path: "/lodging-page",
    name: "LodgingPage",
    component: () => import("@/views/Lodging.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
