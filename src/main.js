import './assets/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMathjax from 'vue-mathjax-next';

const app = createApp(App)

app.use(VueMathjax)
app.use(router)

app.mount('#app')
