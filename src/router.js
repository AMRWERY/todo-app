import { createRouter, createWebHistory } from 'vue-router';

import ToDo from './component/ToDo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home', component: ToDo }
    ]
});

export default router;