import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useFetch } from '../utils/useFetch'
import { useCountryStore } from "./useCountryStore";
import { useDateStore } from "./useDateStore";

export const useHolidayDataStore = defineStore('holidayData', () => {
  const {selectedCountry} = storeToRefs(useCountryStore())
  const {selectedYear} = storeToRefs(useDateStore())

  const longWeekendsData = ref([])
  const publickHolidaysData = ref([])
  const publicHolidays = ref([])
  const publicHolidaysWorldWide = ref([])
  const isTodayPublicHoliday = ref(false)

  const getLongWeekends = async() => {
    const data = await useFetch(`/LongWeekend/${selectedYear}/${selectedCountry}`)
    longWeekendsData.value = data
  }

  const getPublicHolidays = async() => {
    const data = await useFetch(`/PublicHolidays/${selectedYear}/${selectedCountry}`)
    publickHolidaysData.value = data
  }

  const getTodayIsPublicHoliday = async() => {
    try {
      await useFetch(`/IstodayPublicHoliday/${selectedCountry}`)
      isTodayPublicHoliday.value = true // TODO this one returns HTTP codes only: 
      // So this one should be hanlded differently.
      // 200	Today is a public holiday
      // 204	Today is not a public holiday
      // 400	Validation failure
      // 404	CountryCode is unknown
    } catch(err) {
      console.log(err);
      isTodayPublicHoliday.value = false
    }
  }

  const getUpcommingHolidays = async () => {
    const data = await useFetch(`/NextPublicHolidays/${selectedCountry}`)
    publicHolidays.value = data
  }

  const getUpcommingHolidaysWorldWide = async () => {
    const data = await useFetch('/NextPublicHolidaysWorldwide')
    publicHolidaysWorldWide.value = data
  }

  return {
    longWeekendsData,
    publickHolidaysData,
    publicHolidaysWorldWide,
    isTodayPublicHoliday,
    getLongWeekends,
    getPublicHolidays,
    getTodayIsPublicHoliday,
    getUpcommingHolidays,
    getUpcommingHolidaysWorldWide
  }
})