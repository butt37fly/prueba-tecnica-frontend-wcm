<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  body: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="c-card w-full flex flex-col items-start p-4 gap-2" :data-id="props.id">
    <h3 class="font-semibold text-lg">{{ props.title }}</h3>
    <p>{{ props.body }}</p>
  </article>
</template>

<style scoped>
.c-card {
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-sm);
}
</style>
