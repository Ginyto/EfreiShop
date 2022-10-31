import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.use(createPinia())
app.mount('#app')
app.component('Icon', Icon)

