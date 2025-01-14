import 'ant-design-vue/dist/reset.css'
import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import { createNotivue } from 'notivue'

import 'notivue/notification.css'
import 'notivue/animations.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createNotivue())
app.use(createPinia())
app.use(createHead())
app.use(router)

app.mount('#app')
