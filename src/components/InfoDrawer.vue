<script setup lang="ts">
import { useHolidayDataStore } from '../stores/useHolidayDataStore';
import { useApplicationStore } from '../stores/useApplicationStore';
import { storeToRefs } from 'pinia';
const holidayStore = useHolidayDataStore()
const { isDrawerVisible } = storeToRefs(useApplicationStore());

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
</script>

<template>
  <Drawer :pt="{
    root: {
      class: '!border-0'
    },
    header: {
        class: 'bg-astral-50 dark:bg-astral-700 dark:text-astral-900 text-astral-50'
      },
    content: {
        class: 'bg-astral-50 dark:bg-astral-700 pl-1'
      }
    }" 
    v-model:visible="isDrawerVisible" position="right" class="relative">
    <span class="bg-astral-50 dark:bg-astral-700 w-full h-full p-2">
      <h2 class="text-xl font-semibold dark:text-astral-50">Legenda</h2>
      <div class="mt-2 min-h-2 rounded-md text-astral-900 bg-[#00fff2] text-center">
        Part of longweekend
      </div>
      <div class="mt-2 min-h-2 rounded-md text-astral-50 bg-[red] text-center dark:text-astral-50">
        Part of longweekend if taken off
      </div>
      <div class="mt-2 min-h-2 rounded-md bg-astral-400 text-center dark:text-astral-50">
        Holiday
      </div>
      <div class="mt-2 min-h-2 rounded-md bg-astral-400 text-center dark:text-astral-50">
        <i class="pi pi-plus"></i> (Local name and English name)
      </div>
      <Divider />
      <span class="dark:text-astral-50">
        Today {{ holidayStore.isTodayPublicHoliday ? 'is a' : 'is NOT a' }} public holiday
      </span>
      <Divider />
      <h3 class="font-semibold mt-4 dark:text-astral-50">Long weekends this year:</h3>
      <div class="flex flex-col font-extralight dark:text-astral-50">
        <span class="mt-1" v-for="date in holidayStore.longWeekendsData" :key="date.startDate">
          {{new Date(date.startDate).toLocaleDateString(undefined, dateOptions)}} tot {{ new Date(date.endDate).toLocaleDateString(undefined, dateOptions) }}.
          <Divider />
        </span>
      </div>
    </span>
  </Drawer>
</template>