import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import SignIn from "../views/auth/sign/authHome.vue";
import SignUp from "../views/auth/signUp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
