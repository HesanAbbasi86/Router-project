import { createRouter, createWebHistory } from "vue-router";
import { ref } from "vue";

import NotFound from "./components/NotFound.vue";
import Home from "./components/Home.vue";
import Firstpage from "./components/Firstpage.vue";
import Secondpage from "./components/Secondpage.vue";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";

/* ------------------------------------------------------------------ */
/* Routes                                                              */
/* ------------------------------------------------------------------ */

const routes = [
  { path: "/", component: Home },
  { path: "/Login", component: Login },
  { path: "/Dashboard", component: Dashboard },
  { path: "/Firstpage", component: Firstpage },
  { path: "/Secondpage", component: Secondpage },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* ------------------------------------------------------------------ */
/* Reactive state                                                      */
/* ------------------------------------------------------------------ */

router.cameFrom = ref(sessionStorage.getItem("cameFrom"));
router.redirectPage = ref(sessionStorage.getItem("redirectPage"));

function setCameFrom(value) {
  router.cameFrom.value = value;

  if (value) {
    sessionStorage.setItem("cameFrom", value);
  } else {
    sessionStorage.removeItem("cameFrom");
  }
}

function setRedirectPage(value) {
  router.redirectPage.value = value;

  if (value) {
    sessionStorage.setItem("redirectPage", value);
  } else {
    sessionStorage.removeItem("redirectPage");
  }
}

/* ------------------------------------------------------------------ */
/* Navigation Guard                                                    */
/* ------------------------------------------------------------------ */

router.beforeEach((to, from) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const isLogin = !!(username && password);
  if (to.path === "/Dashboard" && !isLogin) {
    setRedirectPage(to.path);
    setCameFrom(to.path);

    sessionStorage.setItem("forcedRedirect", "1");

    return "/Login";
    return;
  }
  if (to.path === "/Login") {
    if (isLogin) {
      return "/Dashboard";
      return;
    }

    const forcedRedirect = sessionStorage.getItem("forcedRedirect");

    if (forcedRedirect) {
      sessionStorage.removeItem("forcedRedirect");
    } else {
      setRedirectPage(null);

      if (from.path && from.path !== "/Login") {
        setCameFrom(from.path);
      }
    }

    return;
  }

  return;
});
router.afterEach((to, from) => {
  if (from.path && from.path !== to.path) {
    setCameFrom(from.path);
  }
});

export default router;
