<template>
    <div class="p-6 rounded-xl text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
           bg-gradient-to-br from-lightCard to-mint/10 dark:from-darkCard dark:to-mint/10
           text-lightText dark:text-darkText border border-lightBorder dark:border-darkBorder
           hover:ring-2 hover:ring-mint hover:shadow-mint/30">
        <img :src="project.image" :alt="project.title" class="mx-auto mb-4 h-12" />
        <h3 class="text-xl font-bold tracking-tight mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-2">{{ project.description }}</p>
        <p class="text-mint text-sm uppercase tracking-wide mb-3">{{ project.tech }}</p>
        <a :href="project.github" target="_blank"
            class="inline-block border border-mint px-4 py-1 rounded hover:bg-mint hover:text-darkBg transition-all duration-300">
            GitHub
        </a>
    </div>
</template>

<script setup>
    defineProps({
        project: Object,
    })
</script>