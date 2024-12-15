<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MonthControls from './MonthControls.vue';
import { useCalendarStore } from '../../stores/useCalendarStore';
const {firstDay, daysInMonth, daysOfWeek} = storeToRefs(useCalendarStore())
</script>

<template>
  <Card>
    <template #content>
      <MonthControls />
      <section class="grid grid-cols-7 gap-2 m-auto">
        <div class="p-2 border border-astral-200 text-center font-bold rounded bg-astral-200" v-for="weekday in daysOfWeek">
          {{ weekday }}
        </div>
        <div class="p-2 min-h-28 border border-astral-200 text-center rounded bg-astral-50" v-for="day in firstDay" :key="`day-${day}`">
          &nbsp;
        </div>
        <div class="p-2 min-h-28 border border-astral-200 text-center" v-for="day in daysInMonth" :key="`actual-${day}`">
          {{ day }}
        </div>
      </section>
    </template>
  </Card>
</template>