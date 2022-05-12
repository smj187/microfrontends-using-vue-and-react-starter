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

    // shared
    {
      path: "/shared-react-element",
      name: "SharedReact",
      component: () => import("../views/ReactSharedImplView.vue"),
    },
    {
      path: "/shared-vue-element",
      name: "SharedVue",
      component: () => import("../views/VueSharedImplView.vue"),
    },

    // vue remote
    {
      path: "/vue-remote",
      name: "VueRemote",
      component: () => import("../views/VueRemoteImplView.vue"),
    },
    {
      path: "/vue-remote/:children+",
      name: "VueRemoteChildren",
      component: () => import("../views/VueRemoteImplView.vue"),
    },

    // react remote
    {
      path: "/react-remote",
      name: "ReactRemote",
      component: () => import("../views/ReactRemoteImplView.vue"),
    },
    {
      path: "/react-remote/:children+",
      name: "ReactRemoteChildren",
      component: () => import("../views/ReactRemoteImplView.vue"),
    },

    // error
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
})

export default router
