import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import Sign from "../views/sign/signIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign",
    name: "sign",
    component: Sign,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
