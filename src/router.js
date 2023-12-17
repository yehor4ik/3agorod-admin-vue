import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const ROUTES_PATHS = {
    HOME: '/',
    LOGIN: 'login',
    COLLECTION: 'collection',
    PRODUCT: 'product',
    CREATE: 'create'
}

const routes = [
    {
        path: ROUTES_PATHS.HOME,
        component: () => import('./pages/HomePage.vue'),
        children: [
            {
                path: `/${ROUTES_PATHS.COLLECTION}`,
                component: () => import('./pages/CollectionPage.vue'),
            },
            {
                path: `/${ROUTES_PATHS.COLLECTION}/${ROUTES_PATHS.CREATE}`,
                component: () => import('./pages/CreateCollectionPage.vue')
            },
            {
                path: ROUTES_PATHS.PRODUCT,
                component: () => import('./pages/ProductPage.vue')
            }
        ],
    },
    {
        path: `/${ROUTES_PATHS.LOGIN}`,
        component: () => import('./pages/LoginPage.vue')
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes,
})
