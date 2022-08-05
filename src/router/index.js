import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home/Home";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    redirect: { name: "recommend" },
    meta: { showTabBar: true },
    children: [
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
    ],
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: () => import("@/views/dynamic/Dynamic"),
    meta: { showTabBar: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile/Profile"),
    meta: { showTabBar: true },
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/SignIn"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignUp")
  },
  {
    path: "/video/:vid",
    name: "video",
    component: () => import("@/views/Video")
  },
  {
    path: "/post/:pid",
    name: "post",
    component: () => import("@/views/Post")
  }
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

// 全局前置守卫，在跳转到新网址之前
router.beforeEach((to, from, next) => {
  // to => home , from => signin
  if (store.state.user.loginStatus) {
    if (to.name === 'signin' || to.name === 'signup') {
      // 如果登录之后再去访问注册和登录页面就直接跳转到主页
      next({ name: "home" })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
