import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importe o router que acabamos de criar

createApp(App)
  .use(router)  // Use o Vue Router
  .mount('#app');
