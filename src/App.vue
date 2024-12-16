<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CountrySelector from './components/CountrySelector.vue';
import YearSelector from './components/YearSelector.vue';
import Month from './components/calendar/Month.vue';
import { useHolidayDataStore } from './stores/useHolidayDataStore';
import { useApplicationStore } from './stores/useApplicationStore';
import InfoDrawer from './components/InfoDrawer.vue';
import { onMounted } from 'vue';

const holidayStore = useHolidayDataStore()
const {isDrawerVisible} = storeToRefs(useApplicationStore());

onMounted(() => {
  holidayStore.initApplication()
})

</script>

<template>
  <div class="page bg-astral-50 dark:bg-astral-700 ">
    <header class="main-header p-2 border-b border-astral-500 bg-astral-50 dark:bg-astral-700">
      <div class="text-4xl font-extrabold tracking-wider dark:text-astral-50">
        Freedom!
      </div>
    </header>
    <div class="side-bar-toggle pr-2 flex justify-end items-center w-full border-b border-astral-500 bg-astral-50 dark:bg-astral-700">
      <Button icon="pi pi-arrow-left" @click="isDrawerVisible = !isDrawerVisible" />
    </div>
    <main class="main-content sm:p-0 md:p-2 bg-astral-50 dark:bg-astral-700">
      <section class="filter-container flex flex-row justify-center sm:gap-1 md:gap-2">
        <CountrySelector class="my-2 self-end"/>
        <YearSelector class="my-2 self-start"/>
      </section>
      <section class="calendar flex justify-center">
        <Month class="grow sm:min-w-[360px] sm:max-w-[360px] md:min-w-[780px] md:max-w-[1250px]" />
      </section>
    </main>
    <InfoDrawer />
    <footer class="main-footer border-t border-astral-500 bg-astral-50 dark:bg-astral-700 dark:text-astral-50 flex justify-center items-center">
      Created by Jeffrey Meesters
    </footer>
  </div>
</template>

<style scoped>
.page {
  height: 100svh;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas: 
    'main-header side-bar-toggle'
    'main-content main-content'
    'main-footer main-footer'
  ;

  .main-header {
    grid-area: main-header;
    place-items: center;
  }
  .side-bar-toggle {
    grid-area: side-bar-toggle;
    place-items: center;
  }

  .main-aside {
    grid-area: main-aside;
  }

  .main-content {
    grid-area: main-content;
  }

  .main-footer {
    grid-area: main-footer;
    grid-column: span 2;
  }
}
</style>
