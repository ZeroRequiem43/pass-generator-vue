import { createApp } from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import store from './store'

createApp(App).use(store).mount('#app')
