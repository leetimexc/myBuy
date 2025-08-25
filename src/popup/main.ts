import { createApp } from 'vue'
import Popup from './Popup.vue'
import '../assets/main.css'
import router from '../router'

// 可以使用Vue 3的所有功能
const app = createApp(Popup)

// 启用路由
app.use(router)

// 如果需要使用状态管理
// import { createPinia } from 'pinia'
// app.use(createPinia())

app.mount('#app')
