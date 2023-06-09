import { createApp } from 'vue';
import store from './store';
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import VueGridLayout from 'vue-grid-layout';
import App from './App.vue';
import './mock';
// CSS 部分
import '@/assets/style/global.less';
import '@/assets/style/tailwind.css';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(router);
app.use(store);

app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(VueGridLayout as any);

app.mount('#app');
