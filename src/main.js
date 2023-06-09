import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './style/element/index.scss'

createApp(App)
.use(ElementPlus, { size: 'small' })
.mount('#app')
