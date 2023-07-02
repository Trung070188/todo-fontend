// Composables
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/Login";
import login from "@/router/modules/login";
import home from "@/router/modules/home";
import user from "@/router/modules/user";

const routes = [...login, ...home, ...user];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, form, next) => {
  const isAuthenticated = store.state.token || localStorage.getItem("token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
