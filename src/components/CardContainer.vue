<script setup>
import { useCapitalize } from '@/composables/useCapitalize'

const props = defineProps({
  post: Object,
})
</script>

<template>
  <article class="c-card flex w-full flex-col items-start gap-2 p-4" :data-id="props.post.id">
    <img :src="props.post.image" :alt="props.post.title" class="aspect-video rounded-sm" />
    <h3 class="text-lg font-semibold">{{ useCapitalize(props.post.title) }}</h3>
    <p>{{ useCapitalize(props.post.body) }}</p>
  </article>
</template>

<style scoped>
.c-card {
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-sm);
}
</style>
