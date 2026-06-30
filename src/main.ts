import { createApp } from 'vue'
import './styles/theme.css'
import './styles/base.css'
import './styles/app.css'
import './styles/projects.css'
import './styles/project-detail.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
