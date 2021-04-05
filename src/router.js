import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/components/HelloWorld";
import ProjectionView from "@/components/ProjectionView";
import InstructionsView from "@/components/InstructionsView";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/instructions',
            name: 'instructions',
            components: {
                default: InstructionsView,
                a: ProjectionView
            }
        },
        {
            path: '/projection',
            name: 'projection',
            component: ProjectionView,
        },
    ]
})
