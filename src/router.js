import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const ROUTES_PATHS = {
    HOME: '/',
    LOGIN: '/login',
}

const routes = [
    {
        path: ROUTES_PATHS.HOME,
        component: () => import('./pages/HomePage.vue')
    },
    {
        path: ROUTES_PATHS.LOGIN,
        component: () => import('./pages/LoginPage.vue')
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes,
})
