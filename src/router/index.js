import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StripeMenu from '../views/StripeMenu.vue'
import LcMixPanelScrollPin from '../views/LcMixPanelScrollPin.vue'
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

    {
        path: '/section-2',
        name: 'LcMixPanelScrollPin',
        component: LcMixPanelScrollPin,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router