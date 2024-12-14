<script setup lang="ts">
import CountrySelector from './components/CountrySelector.vue';
import YearSelector from './components/YearSelector.vue';
import SearchButton from './components/SearchButton.vue';
import Month from './components/calendar/Month.vue';
</script>

<template>
  <div class="page text-astral-800">
    <header class="main-header flex justify-center items-center p-2 border-b border-astral-500 bg-astral-50">
      <span class="text-4xl font-extrabold tracking-wider">
        Freedom!
      </span>
    </header>
    <aside class="main-aside border-r border-astral-500 bg-astral-50 p-1">
      <CountrySelector class="mb-2 mt-2"/>
      <YearSelector class="mb-2"/>
      <SearchButton class="mb-2 w-full" button-text="Public holidays" used-for-store-action-name="getPublicHolidays"/>
      <SearchButton class="mb-2 w-full" button-text="Long weekends" used-for-store-action-name="getLongWeekends"/>
      <SearchButton class="mb-2 w-full" button-text="Check today" used-for-store-action-name="getTodayIsPublicHoliday"/>
      <SearchButton class="mb-2 w-full" button-text="Upcoming" used-for-store-action-name="getUpcommingHolidays"/>
      <SearchButton class="mb-2 w-full" button-text="Upcoming worldwide" used-for-store-action-name="getUpcommingHolidaysWorldWide"/>
    </aside>
    <main class="main-content p-2 bg-astral-50">
      <Month />
    </main>
    <footer class="main-footer border-t border-astral-500 bg-astral-50 flex justify-center items-center">
      Created by Jeffrey Meesters
    </footer>
  </div>
</template>

<style scoped>
.page {
  height: 100svh;
  display: grid;
  grid-template-columns: minmax(100px, 200px) minmax(200px, 1fr);
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas: 
    'main-header main-header'
    'main-aside main-content'
    'main-footer main-footer'
  ;

  .main-header {
    grid-area: main-header;
    grid-column: span 2;
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
