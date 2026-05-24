<script setup>
import { onMounted, ref } from 'vue'
import { useContentStore } from '@/stores/content'

const content = useContentStore().state.site
const nav = [
  {
    text: 'Inicio',
    path: '/#',
  },
  {
    text: 'Noticias',
    path: '/#noticias',
  },
  {
    text: 'Eventos',
    path: '/#eventos',
  },
]

const isNavOpen = ref(null)
const emit = defineEmits(['openSidebar'])

const toggleMenu = () => {
  isNavOpen.value = isNavOpen.value ? false : true
}

const openSidebar = () => {
  emit('eventoPersonalizado', true)
}

onMounted(() => {
  isNavOpen.value = false
})
</script>

<template>
  <header class="w-screen">
    <section class="m-auto flex max-w-285 flex-row justify-between p-3">
      <div class="flex items-center justify-start">
        <img v-if="content.logo !== ''" :src="content.logo" class="size-25 object-contain" />
        <span v-else class="font-bold uppercase">Logo here</span>
      </div>
      <nav class="c-nav relative flex flex-row items-center" :data-nav-open="isNavOpen">
        <button class="size-10 sm:hidden" @click="openSidebar">
          <i class="fa-solid fa-pen text-[25px]"></i>
        </button>

        <button class="size-10 sm:hidden" @click="toggleMenu">
          <i class="fa-solid fa-bars text-[25px]"></i>
        </button>

        <ul class="c-nav__list flex flex-col justify-end sm:flex-row sm:gap-1">
          <li
            v-for="(item, index) in nav"
            :key="index"
            class="c-nav__item w-full p-3 text-right sm:p-1"
          >
            <RouterLink :to="item.path" class="block w-full" active-class="current"
              >{{ item.text }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>
<style scoped>
.c-nav[data-nav-open='true'] .c-nav__list {
  display: flex;
}

.c-nav__list {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  width: 200px;
}

.c-nav__item {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-black);
}

@media (min-width: 640px) {
  .c-nav__list {
    display: flex;
    position: static;
    flex-direction: row;
  }

  .c-nav__item {
    border-bottom: unset;
  }
}
</style>
