import { createRouter, createWebHistory } from "vue-router";
import MainPage from './MainPage.vue';
import TariffsPage from './TariffsPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: MainPage,
            alias: '/'
        },
        {
            path: '/tariffs',
            component: TariffsPage
        }
    ]
})