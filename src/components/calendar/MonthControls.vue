<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCalendarStore } from '../../stores/useCalendarStore';
import { computed } from 'vue';
const {currentMonth, selectedMonth} = storeToRefs(useCalendarStore());
const placing = computed(() => currentMonth.value < 11 && currentMonth.value === 0 ? 'end' : 'between')
</script>
<template>
  <div :class="`relative flex justify-${placing} items-center mb-3`">
    <span class="absolute inset-0 flex items-center justify-center font-semibold text-xl text-astral-600" >{{ selectedMonth }}</span>
    <Button v-if="currentMonth !== 0" label="Previous" class="min-w-52" @click="currentMonth = currentMonth - 1"/>
    <Button v-if="currentMonth !== 11" label="Next" class="min-w-52" @click="currentMonth = currentMonth + 1"/>
  </div>
</template>