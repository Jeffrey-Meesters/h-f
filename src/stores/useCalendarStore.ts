import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useDateStore } from "./useDateStore";

export const useCalendarStore = defineStore('calendar', () => {
  const {selectedYear} = storeToRefs(useDateStore());
  const currentMonth = new Date().getMonth()
  const months = ref([
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ])
  const daysOfWeek = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
  const selectedMonth = ref(`${months.value[currentMonth]}`)
  const monthIndex = computed(() => months.value.findIndex((month) => month === selectedMonth.value || 0))
  // Get the first day of the month and total days in the month
  const firstDay = computed(() => new Date(selectedYear.value, monthIndex.value, 1).getDay());
  const daysInMonth = computed(() => new Date(selectedYear.value, monthIndex.value + 1, 0).getDate())

  return {
    firstDay,
    daysInMonth,
    daysOfWeek,
    selectedMonth
  }
})