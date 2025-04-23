import login from '../views/login.vue'
import home from '../views/home.vue'
import welcome from "../views/welcome.vue";
import attention from "../views/attention.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {path:"/" , component:login },
    {path:"/home", component:home ,
        children:[
        {path:"", component: welcome},
        {path:"attention", component:attention}
    ]},
]

export const router =createRouter({
    history:createWebHashHistory(),
    routes
})