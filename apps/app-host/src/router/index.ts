import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    // react
    {
      path: "/react",
      name: "React",
      component: () => import("../views/ReactView.vue"),
    },
    {
      path: "/react-component",
      name: "ReactComponent",
      component: () => import("../views/ReactComponent.vue"),
    },
  ],
})

export default router
