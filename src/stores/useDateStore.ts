import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore('data', () => {
  const selectedYear = ref<number>(2024)
  const allowedYears = ref<number[]>([]);

  return {
    selectedYear,
    allowedYears
  }
})