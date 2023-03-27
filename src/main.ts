import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import '@/styles/main.scss';

const app = createApp(App)
const options = {
    // You can set your default options here
};

app.use(createPinia())
app.use(router)

app.mount('#app')
