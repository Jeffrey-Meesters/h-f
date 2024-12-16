import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useFetch } from '../utils/useFetch'
import { useCountryStore } from "./useCountryStore";
import { useDateStore } from "./useDateStore";
import { useCalendarStore } from "./useCalendarStore";
import type { longWeekendDataType, holidayDataType } from "../types/holidayTypes";

export const useHolidayDataStore = defineStore('holidayData', () => {
  const {selectedCountry} = storeToRefs(useCountryStore())
  const {selectedYear} = storeToRefs(useDateStore())
  const {currentMonth} = storeToRefs(useCalendarStore())

  const longWeekendsData = ref<longWeekendDataType[]>([])
  const publickHolidaysData = ref<holidayDataType[]>([])
  const publicHolidaysWorldWide = ref<holidayDataType[]>([])
  const isTodayPublicHoliday = ref(false)

  async function getLongWeekends() {
   const responseData = await useFetch<longWeekendDataType[]>(`/LongWeekend/${selectedYear.value}/${selectedCountry.value.countryCode}`)
    longWeekendsData.value = responseData?.data || []
  }

  async function getPublicHolidays() {
   const responseData = await useFetch<holidayDataType[]>(`/PublicHolidays/${selectedYear.value}/${selectedCountry.value.countryCode}`)
    publickHolidaysData.value = responseData?.data || []
  }

  async function getTodayIsPublicHoliday() {
    try {
      const responseData = await useFetch(`/IstodayPublicHoliday/${selectedCountry.value.countryCode}`, false)
      isTodayPublicHoliday.value = false
      // 200	Today is a public holiday
      // 204	Today is not a public holiday
      if (responseData?.status === 200) {
        isTodayPublicHoliday.value = true
      }
    } catch(err) {
      // 400	Validation failure
      // 404	CountryCode is unknown
      console.log(err);
      isTodayPublicHoliday.value = false
    }
  }

  async function getUpcommingHolidaysWorldWide() {
   const responseData = await useFetch<holidayDataType[]>('/NextPublicHolidaysWorldwide')
    publicHolidaysWorldWide.value = responseData?.data || []
  }

  async function initApplication() {
    try {
      await getPublicHolidays()
      await getLongWeekends()
      await getLongWeekends()
      await getTodayIsPublicHoliday()
    } catch (err) {
      console.log(err)
    }
  }

  const getHolidayData = computed(() => {
    const updatedMonthIndex = currentMonth.value + 1;
    const month = (updatedMonthIndex).toString().length < 2 ? `0${updatedMonthIndex}` : updatedMonthIndex
    const currentYearAndMonth = `${selectedYear.value}-${month}` // TODO data is with 0 like 05
    const data = publickHolidaysData.value
    const newData = data?.filter((holiday) => {
      if (holiday.date.includes(currentYearAndMonth)) {
        return {...holiday};
      }
    })
    return newData as holidayDataType[];
  })

  const getLongWeekendData = computed(() => {
    const updatedMonthIndex = currentMonth.value + 1;
    const month = (updatedMonthIndex).toString().length < 2 ? `0${updatedMonthIndex}` : updatedMonthIndex
    const currentYearAndMonth = `${selectedYear.value}-${month}` // TODO data is with 0 like 05
    const data = longWeekendsData.value
    const newData = data?.filter((holiday) => {
      if (holiday.startDate.includes(currentYearAndMonth)) {
        return {...holiday};
      }
    })
    return newData as longWeekendDataType[];
  })

  return {
    longWeekendsData,
    publickHolidaysData,
    publicHolidaysWorldWide,
    isTodayPublicHoliday,
    getLongWeekends,
    getPublicHolidays,
    getTodayIsPublicHoliday,
    getUpcommingHolidaysWorldWide,
    initApplication,
    getHolidayData,
    getLongWeekendData
  }
})