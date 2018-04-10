import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },{
            path: '/type_script',
            name: 'TypeScript',
            component: () => import('../page/language/TypeScript.vue')
        },{
            path: '/clojure_script',
            name: 'ClojureScript',
            component: () => import('../page/language/ClojureScript.vue')
        },{
            path: '/flow_script',
            name: 'Flow',
            component: () => import('../page/language/Flow.vue')
        }
    ]
})
