import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/home-view.vue';
import SignIn from '../views/auth/sign/signIn.vue';
import SignUp from '../views/auth/signUp.vue';
import ProfileView from '../views/profile/profiles.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/',
    name: 'Docs',
    component: () => import(/* webpackChunkName: "docs" */ '../views/DocsView.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopView.vue'),
  },
  {
    path: '/shop/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "product-detail" */ '../views/ProductDetailView.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
