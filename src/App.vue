<template>
  <div class="min-h-screen font-[Montserrat] transition-colors duration-300 bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">
    <NavBar />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
