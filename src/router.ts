import {createRouter, createWebHistory} from "vue-router";
// @ts-ignore
import CmsPage from "@/components/pages/CmsPage.vue";
// @ts-ignore
import AuthPage from "@/components/pages/AuthPage.vue";
// @ts-ignore
// @ts-ignore
import RegPage from "@/components/pages/RegPage.vue";

const routes = [
    {
        path: '/cms',
        name: 'cms',
        component: CmsPage,

    },
    {
        path: '/login',
        name: 'login',
        component: AuthPage
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegPage
    }
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
    // @ts-ignore

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})
// @ts-ignore
router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.getItem('user_token')) next({name: 'login'})
    else next()
})
