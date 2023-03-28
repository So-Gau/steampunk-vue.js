import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "vue-query";
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import '@/styles/main.scss';

const app = createApp(App)

const options = {
    // You can set your default options here
};

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin);
app.use(Toast, options);
app.mount('#app')