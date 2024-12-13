import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

export const Preset = definePreset(Aura, {
  semantic: {
      primary: {
        50: '#f1f8fa',
        100: '#dbecf2',
        200: '#bcd9e5',
        300: '#8dbed3',
        400: '#579ab9',
        500: '#3f85a8',
        600: '#346786',
        700: '#30556e',
        800: '#2e485c',
        900: '#2a3e4f',
        950: '#182734',
      }
  }
});