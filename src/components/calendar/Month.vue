<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MonthControls from './MonthControls.vue';
import { useCalendarStore } from '../../stores/useCalendarStore';
import { useHolidayDataStore } from '../../stores/useHolidayDataStore';
import Day from './Day.vue';
import type { holidayDataType, longWeekendDataType } from '../../types/holidayTypes';

const {firstDay, daysInMonth, daysOfWeek, currentMonth } = storeToRefs(useCalendarStore())
const { getHolidayData, getLongWeekendData } = storeToRefs(useHolidayDataStore())

function getHoliday(day: number): Partial<holidayDataType> {
  const updatedMonthIndex = currentMonth.value + 1;
  const updatedDay = (day).toString().length < 2 ? `0${day}` : day
  const month = (updatedMonthIndex).toString().length < 2 ? `0${updatedMonthIndex}` : updatedMonthIndex
  const data = getHolidayData.value
  let obj = {}
  for(const holiday of data) {
    if (holiday.date.includes(`${month}-${updatedDay}`)) {
      obj = {...holiday}
    }
  }

  return obj;
}

function getLongWeekends(): Partial<longWeekendDataType> {
  const updatedMonthIndex = currentMonth.value + 1;
  const month = (updatedMonthIndex).toString().length < 2 ? `0${updatedMonthIndex}` : updatedMonthIndex
  const data = getLongWeekendData.value
  let obj = {}
  for(const holiday of data) {
    if (holiday.startDate.includes(`${month}`)) {
      obj = {...holiday}
    }
  }

  return obj;
}
</script>

<template>
  <div class="border rounded-xl sm:p-0 md:p-2 drop-shadow-md bg-astral-50 dark:bg-astral-800 border-astral-50 dark:border-astral-800">
      <MonthControls />
      <section class="grid grid-cols-7 sm:gap-1 md:gap-2 m-auto">
        <div class="sm:p-0 md:p-2 border border-astral-200 text-center font-bold rounded bg-astral-200" v-for="weekday in daysOfWeek" :key="weekday">
          {{ weekday }}
        </div>
        <Day class="bg-astral-50 dark:bg-astral-900" v-for="day in firstDay" :key="`day-${day}`" :day="0" />
        <Day class="bg-astral-50 dark:bg-astral-700 dark:text-astral-50" v-for="day in daysInMonth" :key="`actual-${day}`" :day="day" :day-data="getHoliday(day) || {}" :long-wekend-data="getLongWeekends()"/>
      </section>
  </div>
</template>