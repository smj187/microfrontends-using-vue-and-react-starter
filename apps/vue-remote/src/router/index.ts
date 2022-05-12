import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const flatRouteArray = (arr: Array<RouteRecordRaw>): Array<RouteRecordRaw> => {
  let result: Array<RouteRecordRaw> = []
  arr.forEach((child) => {
    result.push(child)

    if (Array.isArray(child.children)) {
      result = result.concat(flatRouteArray(child.children))
    }
  })

  return result
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/vue-remote",
    name: "VueRemote",
    meta: { isMfe: true },
    component: () => import("../views/RemoteVue.vue"),
    children: [
      {
        path: "/vue-remote/a",
        name: "VueRemoteA",
        meta: { isMfe: true },
        component: () => import("../views/ViewA.vue"),
      },
      {
        path: "/vue-remote/b",
        name: "VueRemoteB",
        meta: { isMfe: true },
        component: () => import("../views/ViewB.vue"),
      },
      {
        path: "/vue-remote/c",
        name: "VueRemoteC",
        meta: { isMfe: true },
        component: () => import("../views/ViewC.vue"),
      },
    ],
  },
]

const getRoutes = () => {
  const isDev = import.meta.env.DEV

  if (isDev) return Array.from(routes)

  // const flatRoutes = flatRouteArray(routes)
  const mfeRoutes = routes.filter((route) => route.meta?.isMfe)
  return Array.from(mfeRoutes).sort((x, y) => x.path.localeCompare(y.path))
}

export const buildRouter = () => {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: getRoutes(),
  })
}
