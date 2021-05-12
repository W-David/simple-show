import { createApp } from 'vue'
import App from './App.vue'
import animate from 'animate.css'
import '@/assets/style/reset.css'

const app = createApp(App)
app.use(animate)
app.mount('#app')
