import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(autoAnimatePlugin)
app.use(axios)
app.mount('#app')
app.component('Icon', Icon)

