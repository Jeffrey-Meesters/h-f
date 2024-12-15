<script setup lang="ts">
import { onMounted } from 'vue'
import { useDateStore } from '../stores/useDateStore';
import { storeToRefs } from 'pinia';

const { allowedYears, selectedYear } = storeToRefs(useDateStore());

onMounted(() => {
  const storageKey = 'years'
  const years = sessionStorage.getItem(storageKey);

  if (years) {
    allowedYears.value = JSON.parse(years);
    return;
  }

  if (!years) {
    for(let i = 1974; i < 2075; i ++) {
      allowedYears.value.push(i)
    }
  }

  sessionStorage.setItem(storageKey, JSON.stringify(allowedYears.value));
})
</script>

<template>
  <div>
    <Select v-model="selectedYear" :options="allowedYears" filter placeholder="Select a year" class="w-full md:w-56">
      <template #option="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option }}</div>
        </div>
      </template>
    </Select>
  </div>
</template>
