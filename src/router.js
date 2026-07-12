import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./components/NotFound.vue";
import Home from "./components/Home.vue";
import Firstpage from "./components/Firstpage.vue";
import Secondpage from "./components/Secondpage.vue";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/Login",
    component: Login,
  },

  {
    path: "/Dashboard",
    component: Dashboard,
  },

  {
    path: "/Firstpage",
    component: Firstpage,
  },

  {
    path: "/Secondpage",
    component: Secondpage,
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

// Navigation Guard

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("isLogin");

  console.log("Login status:", isLogin);

  // اگر کاربر Login نیست و میخواهد Dashboard برود

  if (to.path === "/Dashboard" && !isLogin) {
    next("/Login");
  }

  // اگر کاربر Login است و میخواهد دوباره Login برود
  else if (to.path === "/Login" && isLogin) {
    next("/Dashboard");
  } else {
    next();
  }
});

export default router;
