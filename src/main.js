import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from 'axios'

axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(autoAnimatePlugin)
app.use(pinia)
app.mount('#app')
app.component('Icon', Icon)

