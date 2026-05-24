<script setup>
import CardContainer from './CardContainer.vue'

const props = defineProps({
  posts: {
    type: Array,
    default: null,
  },
})

console.log(props.posts)
</script>

<template>
  <section class="w-full" id="noticias">
    <div class="grid max-w-285 m-auto grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
      <CardContainer v-for="post in props.posts" :key="post.id" :="post" />
    </div>
  </section>
</template>

<style scoped></style>
