<script setup>
import ButtonItem from './ButtonItem.vue'
import { useContentStore } from '@/stores/content'

const content = useContentStore().state.banner
</script>

<template>
  <section
    class="c-banner flex aspect-video max-h-150 w-full items-center justify-center p-4"
    :style="`background-image: url('${content.background}')`"
  >
    <div class="m-auto flex max-w-285 flex-col items-center justify-center gap-2">
      <h1 class="text-center text-2xl font-bold text-white uppercase sm:text-4xl">
        {{ content.title }}
      </h1>
      <ButtonItem :title="content.buttonText" :link="content.buttonLink" />
    </div>
  </section>
</template>

<style scoped>
.c-banner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
