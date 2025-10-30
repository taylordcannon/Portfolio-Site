<template>
  <div class="min-h-screen font-[Montserrat] transition-colors duration-300 bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">
    <NavBar />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 2.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
  position: absolute;
  width: 100%;
}

.slide-fade-enter-from {
  transform: translateX(60px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}
</style>
