import { createApp } from 'vue'

import './assets/style/_index.scss'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
