<script setup lang="ts">
import CountrySelector from './components/CountrySelector.vue';
</script>

<template>
  <div class="page text-astral-100">
    <header class="main-header flex items-center p-2 border-b border-astral-500 bg-astral-950">
      <span class="text-4xl font-extrabold tracking-wider">
        Freedom!
      </span>
    </header>
    <aside class="main-aside border-r border-astral-500 bg-astral-950 p-1">
      <CountrySelector />
    </aside>
    <main class="main-content p-2 bg-astral-950">
      <section>
        <h1 class="text-4xl text-white">Want to know when those good days come again?!</h1>
        <h2 class="text-2xl text-white">Hurry, find them below!</h2>
      </section>
    </main>
    <footer class="main-footer border-t border-astral-500 bg-astral-950 flex justify-center items-center">
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
