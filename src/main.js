import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { registerLayouts } from './layouts/register';

const application = createApp(App);

application.use(Antd);
application.use(createPinia());
application.use(router);
registerLayouts(application);

application.mount('#app');
