<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCalendarStore } from '../../stores/useCalendarStore';
const {currentMonth, selectedMonth} = storeToRefs(useCalendarStore());
</script>
<template>
  <div class="flex justify-between items-center mb-3">
    <Button v-if="currentMonth !== 0" label="Previous" class="min-w-52 !bg-astral-800 border-b-astral-800" @click="currentMonth = currentMonth - 1"/>
    <span>{{ selectedMonth }}</span>
    <Button v-if="currentMonth !== 11" label="Next" class="min-w-52 !bg-astral-800 border-b-astral-800" @click="currentMonth = currentMonth + 1"/>
  </div>
</template>