import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import Sign from "../views/sign/signIn.vue";
import SignUp from "../views/sign/signUp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: Sign,
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
