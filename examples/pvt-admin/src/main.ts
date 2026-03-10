import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// viewerjs
import 'viewerjs/dist/viewer.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
