<script setup lang="ts">
import { onMounted } from 'vue'
import { useCountryStore } from "../stores/useCountryStore";
import { storeToRefs } from "pinia";

const countryStore = useCountryStore()
const {countries, selectedCountry} = storeToRefs(countryStore);

onMounted(() => {
  if (!countries.value.length) {
    countryStore.getCountries()
  }
})
</script>

<template>
  <div class="card flex justify-center">
    <Select v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-56">
      <template #option="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Select>
  </div>
</template>
