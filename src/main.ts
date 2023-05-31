import { createApp } from 'vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'

// CSS 部分
import '@/assets/style/global.less'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App);
app.use(router);

app.use(ArcoVue);

app.mount('#app')
