<script setup>
import { ref } from 'vue'

import ButtonItem from './ButtonItem.vue'

import { useContentStore } from '@/stores/content'
import { toBase64 } from '@/composables/toBase64'

const contentStore = useContentStore()
const content = contentStore.state

const logo = ref(null)
const background = ref(null)

const save = async () => {
  const logoFile = logo.value.files[0]
  const backgroundFile = background.value.files[0]

  if (logoFile != undefined) {
    const img = await toBase64(logoFile)
    content.site.logo = img
  }

  if (backgroundFile != undefined) {
    const img = await toBase64(backgroundFile)
    content.banner.background = img
  }

  contentStore.saveContent(content)
}
</script>

<template>
  <form class="c-form flex w-full flex-col gap-6 overflow-auto p-4" @submit.prevent="onSubmit">
    <fieldset class="c-form__fieldset">
      <legend class="c-form__legend">General</legend>
      <div class="c-form__group">
        <label class="c-form__label" for="site_logo">Logotipo</label>
        <input ref="logo" class="c-form__input" type="file" id="site_logo" />
      </div>
    </fieldset>
    <fieldset class="c-form__fieldset">
      <legend class="c-form__legend">Banner</legend>

      <div class="c-form__group">
        <label class="c-form__label" for="banner_title">Título</label>
        <input class="c-form__input" type="text" id="banner_title" v-model="content.banner.title" />
      </div>

      <div class="c-form__group">
        <label class="c-form__label" for="banner_background">Background</label>
        <input ref="background" class="c-form__input" type="file" id="banner_background" />
      </div>

      <div class="c-form__group">
        <label class="c-form__label" for="banner_button-text">Texto del botón</label>
        <input
          class="c-form__input"
          type="text"
          id="banner_button-text"
          v-model="content.banner.buttonText"
        />
      </div>

      <div class="c-form__group">
        <label class="c-form__label" for="banner_button-link">Enlace del botón</label>
        <input
          class="c-form__input"
          type="text"
          id="banner_button-link"
          v-model="content.banner.buttonLink"
        />
      </div>
    </fieldset>
    <ButtonItem title="Guardar" @click="save" />
  </form>
</template>
<style scoped>
.c-form__fieldset {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
}

.c-form__legend {
  font-size: var(--text-2xl);
  margin-bottom: calc(var(--spacing) * 2);
}

.c-form__group {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 2);
}

.c-form__label {
  font-weight: var(--font-weight-semibold);
}

.c-form__input {
  border: 1px solid var(--color-gray-400);
  color: var(--color-gray-800);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
}
</style>
