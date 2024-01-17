import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Details from './components/Details.vue'
import Articles from "./components/Articles.vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


const router = createRouter({
    routes: [{
        path: `/:postId`,
        component: Details
    },
    {
        path: `/`,
        component: Articles
    }],
    history: createWebHistory()
})


const app = createApp(App)
app.use(router)
app.use(VueAwesomePaginate)
app.mount('#app')
