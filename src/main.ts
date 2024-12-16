import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import { Preset } from './primevuePreset';
import './style.css'
import 'primeicons/primeicons.css'

const app = createApp(App);
const pinia = createPinia()

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Preset,
    options: {
      darkModeSelector: '.dark',
    },
  },
});
app.use(pinia)
app.mount('#app')