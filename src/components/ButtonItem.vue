<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
  },
  link: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: '_self',
  },
})
</script>

<template>
  <a
    v-if="props.link !== null"
    :href="props.link"
    :target="props.target"
    :class="`c-button c-button--${props.type}`"
  >
    {{ props.title }}
  </a>

  <button v-else :class="`c-button c-button--${props.type}`">{{ props.title }}</button>
</template>

<style scoped>
.c-button {
  --accent-color: var(--color-gray-900);
  --background-color: var(--color-gray-700);
  --text-color: var(--color-white);

  background-color: var(--background-color);
  border-color: var(--accent-color);
  border-radius: var(--radius-sm);
  border: 1px solid var(--accent-color);
  color: var(--text-color);
  font-weight: var(--font-weight-semibold);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  transition: 0.3s;
}

.c-button:active,
.c-button:focus,
.c-button:hover {
  background-color: var(--accent-color);
  border-color: var(--text-color);
}
</style>
