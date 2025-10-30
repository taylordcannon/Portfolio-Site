<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">
    <div class="max-w-2xl w-full text-center">
      <h1 class="text-4xl font-bold mb-4">Contact Me</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-10">
        Have a question, collaboration idea, or just want to say hello?
        Fill out the form below — I’d love to hear from you!
      </p>

      <!-- Google Form Card -->
      <div class="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <!-- Loader Overlay -->
        <transition name="fade">
          <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center bg-white/80  z-10">
            <svg class="animate-spin h-10 w-10 text-mint mb-3" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Loading form…
            </p>
          </div>
        </transition>

        <!-- Google Form Embed -->
        <iframe ref="formFrame"
          src="https://docs.google.com/forms/d/e/1FAIpQLSekSPxsaUwfec6KSdUx9WK2uAOO-JE_ZaltGqrnCcI6syvunA/viewform?embedded=true"
          width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0" class="w-full"
          @load="onLoad"></iframe>
      </div>

      <p class="text-sm text-gray-500 dark:text-gray-400 mt-6">
        This form is powered by Google Forms — submissions are private and go directly to my inbox.
      </p>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const loading = ref(true)
  const onLoad = () => {
    loading.value = false
  }
</script>

<style scoped>
  /* Simple fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>