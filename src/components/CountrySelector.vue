<script setup lang="ts">
import { onMounted } from 'vue'
import { useCountryStore } from "../stores/useCountryStore";
import { useHolidayDataStore } from '../stores/useHolidayDataStore';
import { storeToRefs } from "pinia";

const countryStore = useCountryStore()
const holidayStore = useHolidayDataStore()
const {countries, selectedCountry} = storeToRefs(countryStore);

async function fetchData() {
  await holidayStore.initApplication()
}

onMounted(() => {
  if (!countries.value.length) {
    countryStore.getCountries()
  }
})
</script>

<template>
  <div>
    <Select @change="fetchData()" v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-56">
      <template #option="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Select>
  </div>
</template>
