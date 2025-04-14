import './assets/main.css'
import './assets/base.css'
// import './assets/fontawesome/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

createApp(App).use(router).mount('#app')
