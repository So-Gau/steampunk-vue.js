import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

import '@/styles/main.scss';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//notification
const options = {
    // You can set your default options here
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
};

app.use(Toast, options);