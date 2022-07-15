import { createRouter, createWebHistory } from "vue-router";

import home from "@/views/home/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    redirect: { name: "recommend" },
    meta: { isTabBarShow: true },
    children: [
      {
        path: "live",
        name: "live",
        component: () => import("@/views/home/Live"),
      },
      {
        path: "recommend",
        name: "recommend",
        component: () => import("@/views/home/Recommend"),
      },
      {
        path: "hot",
        name: "hot",
        component: () => import("@/views/home/Hot"),
      },
      {
        path: "anime",
        name: "anime",
        component: () => import("@/views/home/Anime"),
      },
    ],
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: () => import("@/views/dynamic/Dynamic"),
    meta: { isTabBarShow: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile/Profile"),
    meta: { isTabBarShow: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
  },
  // {
  //     path: '/:pathMatch(.*)*',
  //     name: 'NotFound',
  //     component: NotFound
  // },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
