import {createApp} from 'vue'
import './style.css'
// @ts-ignore
import App from "./App.vue"
import {router} from "./router.ts";

createApp(App).use(router).mount('#app')
