import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicationStore = defineStore('applicationStore', () => {
  const isDrawerVisible = ref(false);

  return {
    isDrawerVisible
  }
})