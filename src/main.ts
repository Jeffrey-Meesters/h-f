import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import './style.css'

const app = createApp(App);
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
    }
  },
});
app.mount('#app')