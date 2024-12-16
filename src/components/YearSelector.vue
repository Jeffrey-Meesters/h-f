<script setup lang="ts">
import { onMounted } from 'vue'
import { useDateStore } from '../stores/useDateStore';
import { useHolidayDataStore } from '../stores/useHolidayDataStore';
import { storeToRefs } from 'pinia';

const holidayStore = useHolidayDataStore()
const { allowedYears, selectedYear } = storeToRefs(useDateStore());

async function fetchData() {
  holidayStore.initApplication()
}

function createYears() {
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
}

onMounted(() => {
 createYears()
})
</script>

<template>
  <div>
    <Select @change="fetchData()" v-model="selectedYear" :options="allowedYears" filter placeholder="Select a year" class="w-full md:w-56">
      <template #option="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option }}</div>
        </div>
      </template>
    </Select>
  </div>
</template>
