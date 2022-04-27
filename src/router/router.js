import {createRouter, createWebHashHistory} from 'vue-router';

import Login from '../pages/login.vue';
import Home from '../pages/home.vue';

const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/home',
    component: Home
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// createRouter用来创建一个可以被 Vue 应用程序使用的路由实例，需要传入两个参数，
// history是表示路由的历史记录，我们可以选择使用createWebHistory、createWebHashHistory来分别创建HTML5历史记录和hash历史记录，我们这里选择创建hash历史记录
export default router;