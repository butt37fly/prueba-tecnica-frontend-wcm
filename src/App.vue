<script setup>
import TheFooter from './components/templates/TheFooter.vue'
import TheHeader from './components/templates/TheHeader.vue'
import TheSidebar from './components/templates/TheSidebar.vue'
</script>

<template>
  <TheHeader />
  <TheSidebar />
  <RouterView />
  <TheFooter />
</template>

<style scoped></style>
