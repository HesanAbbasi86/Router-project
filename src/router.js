// Import the router creation functions from Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Import route components
import NotFound from "./components/NotFound.vue";
import Home from "./components/Home.vue";
import Firstpage from "./components/Firstpage.vue";
import Secondpage from "./components/Secondpage.vue";

// Define all application routes
const routes = [
  {
    // Home page route
    path: "/",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/Firstpage",
    component: Firstpage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    // Second Page route
    path: "/Secondpage",
    component: Secondpage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    // Catch all undefined routes and display the Not Found page
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
  {
    path: "/goto",
    component: Home,
    children: [
      {
        path: "Firstpage",
        component: Firstpage,
      },
    ],
  },

  {
    path: "/goto/Secondpage",
    component: Home,
    beforeEnter(to, from) {
      return "/firstpage";
    },
  },
];

// Create the router instance
const router = createRouter({
  // Use HTML5 History mode
  history: createWebHistory(),

  // Register application routes
  routes,
});
router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    return "/goto";
  }
});
// Export the router instance
export default router;
