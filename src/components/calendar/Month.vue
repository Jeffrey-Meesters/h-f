<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCalendarStore } from '../../stores/useCalendarStore';
const {firstDay, daysInMonth, daysOfWeek} = storeToRefs(useCalendarStore())
</script>

<template>
  <section class="calendar grid grid-cols-7 gap-2 m-0 m-auto">
    <div class="header p-2 border border-y-astral-200 text-center font-bold" v-for="weekday in daysOfWeek">
      {{ weekday }}
    </div>
    <div class="day p-2 border border-y-astral-200 text-center" v-for="day in firstDay" :key="`day-${day}`">
      $nbsp;
    </div>
    <div class="day p-2 border border-y-astral-200 text-center" v-for="day in daysInMonth" :key="`actual-${day}`">
      {{ day }}
    </div>
  </section>
</template>