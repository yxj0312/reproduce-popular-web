import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StripeMenu from '../views/StripeMenu.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/section-1',
        name: 'StripeMenu',
        component: StripeMenu,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router