<template>
  <nav
    class="relative flex items-center justify-center px-4 sm:px-8 py-6 border-b border-gray-300 dark:border-gray-800 bg-lightBg dark:bg-darkBg text-black dark:text-white transition-colors duration-300">


    <!-- Logo -->
    <div class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
      <RouterLink to="/" class="flex items-center hover:opacity-80 transition-opacity duration-300">
        <img
          src="/src/assets/images/icon_mint.svg"
          alt="Logo"
          class="h-8 w-8 sm:h-9 sm:w-9"
        />
      </RouterLink>
    </div>

    <!-- Desktop Links -->
    <div class="hidden sm:flex flex-1 items-center justify-center gap-8 text-base font-medium">
      <RouterLink to="/" class="hover:text-mint transition-colors">Home</RouterLink>
      <RouterLink to="/projects" class="hover:text-mint transition-colors">Projects</RouterLink>
      <RouterLink to="/contact" class="hover:text-mint transition-colors">Contact</RouterLink>
    </div>

    <!-- Right Section (Theme toggle + Hamburger) -->
    <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
      <!-- Theme Toggle (desktop only) -->
      <div class="hidden sm:flex items-center">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" v-model="isDark" />
          <div
            class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-mint rounded-full peer dark:bg-gray-700 peer-checked:bg-mint transition-colors">
          </div>
          <div
            class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-5">
          </div>
        </label>
        <span class="ml-2 text-sm text-gray-600 dark:text-gray-300">
          {{ isDark ? 'Dark' : 'Light' }}
        </span>
      </div>

      <!-- Hamburger Button (mobile only) -->
      <button @click="isMenuOpen = !isMenuOpen"
        class="sm:hidden text-mint focus:outline-none transition-transform duration-200" aria-label="Toggle Menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown (slides down smoothly) -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen"
        class="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-4 bg-lightBg dark:bg-darkBg text-base font-medium text-mint border-t border-gray-300 dark:border-gray-800 shadow-lg z-50">
        <RouterLink to="/"
          class="w-full text-center py-2 hover:bg-mint hover:text-darkBg rounded transition-all duration-300"
          @click="closeMenu">Home</RouterLink>
        <RouterLink to="/projects"
          class="w-full text-center py-2 hover:bg-mint hover:text-darkBg rounded transition-all duration-300"
          @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/contact"
          class="w-full text-center py-2 hover:bg-mint hover:text-darkBg rounded transition-all duration-300"
          @click="closeMenu">Contact</RouterLink>

        <!-- Theme Toggle inside dropdown -->
        <div class="flex items-center justify-center mt-2">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" v-model="isDark" />
            <div
              class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-mint rounded-full peer dark:bg-gray-700 peer-checked:bg-mint transition-colors">
            </div>
            <div
              class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-5">
            </div>
          </label>
          <span class="ml-2 text-sm text-gray-600 dark:text-gray-300">
            {{ isDark ? 'Dark' : 'Light' }}
          </span>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'

  const isDark = ref(false)
  const isMenuOpen = ref(false)

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  onMounted(() => {
    const stored = localStorage.getItem('theme')
    isDark.value = stored === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  })

  watch(isDark, (val) => {
    localStorage.setItem('theme', val ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', val)
  })
</script>

<style scoped>
  /* Fade + Slide for dropdown */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>