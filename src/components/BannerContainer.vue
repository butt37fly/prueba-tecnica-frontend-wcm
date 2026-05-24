<script setup>
import ButtonItem from './ButtonItem.vue'

const props = defineProps({
  imageURL: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'My Banner',
  },
  buttonLink: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'My Button',
  },
})
</script>

<template>
  <section
    class="c-banner w-full flex justify-center items-center aspect-video p-4"
    :style="`background-image: url('${props.imageURL}')`"
  >
    <div class="flex flex-col gap-2 justify-center items-center">
      <h1 class="text-2xl sm:text-4xl text-white text-center font-bold uppercase">
        {{ props.title }}
      </h1>
      <ButtonItem :title="props.buttonText" :link="props.buttonLink" />
    </div>
  </section>
</template>

<style scoped>
.c-banner {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
