import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore('data', () => {
  const selectedYear = ref<number>()
  const allowedYears = ref<number[]>([]);

  return {
    selectedYear,
    allowedYears
  }
})