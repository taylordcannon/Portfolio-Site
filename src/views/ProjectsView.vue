<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/data/projects.js'
</script>

<template>
  <section class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-8">
    <ProjectCard v-for="proj in projects" :key="proj.title" :project="proj" />
  </section>
</template>
