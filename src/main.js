import './assets/_variables.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts.css'
// import Datepicker from 'vuejs3-datepicker'

createApp(App).use(router).mount('#app')
