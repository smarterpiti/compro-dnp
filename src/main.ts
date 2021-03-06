import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
import './main.css'
import 'animate.css';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {top: 0}
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
