// define our routing rules

import { createRouter, createWebHistory } from 'vue-router';
 
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/certification',
        name: 'certification',
        component: () => import('../views/Certification.vue'),
    },
    {
        path: '/validation',
        name: 'validation',
        component: () => import('../views/Validation.vue'),
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router