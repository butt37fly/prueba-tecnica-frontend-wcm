<script setup>
import { ref } from 'vue'
import { useContentStore } from '@/stores/content'

const isOpen = ref(false)

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

const toggleMenu = () => {
  isOpen.value = isOpen.value ? false : true
}
</script>

<template>
  <header class="c-header w-full">
    <section class="m-auto flex h-full max-w-285 flex-row justify-between p-3">
      <div class="flex h-full items-center justify-start">
        <img
          v-if="content.logo !== ''"
          :src="content.logo"
          class="h-full max-w-40 object-contain"
        />
        <span v-else class="font-bold uppercase">Logo here</span>
      </div>

      <nav class="c-nav relative flex flex-row items-center" :data-nav-open="isOpen">
        <button class="size-10 sm:hidden" @click="toggleMenu">
          <i class="fa-solid fa-bars text-[25px]"></i>
        </button>

        <ul class="c-nav__list flex flex-col justify-end sm:flex-row sm:gap-1">
          <li
            v-for="(item, index) in nav"
            :key="index"
            class="c-nav__item w-full p-3 text-right sm:p-1"
          >
            <a :href="item.path" class="block w-full">{{ item.text }} </a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<style scoped>
.c-header {
  background-color: var(--color-white);
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));
  height: 100px;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 50;
}

.c-nav__list {
  border-radius: 0 0 4px 4px;
  position: absolute;
  right: 0;
  top: 116%;
  width: 120px;
}

.c-nav[data-nav-open='true'] .c-nav__item {
  opacity: 1;
  transform: translateY(0px);
  visibility: visible;
}

.c-nav__item {
  background-color: var(--color-white);
  opacity: 0;
  transform: translateY(-10px);
  transition: 0.3s;
  visibility: hidden;
}

.c-nav__item:hover {
  background-color: var(--color-gray-600);
  color: var(--color-white);
}

.c-nav__item:last-child {
  border-radius: 0 0 4px 4px;
}

@media (min-width: 640px) {
  .c-nav__list {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
  }

  .c-nav__item {
    border-bottom: unset;
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;
  }

  .c-nav__item:hover {
    background-color: unset;
    color: var(--color-blue-500);
  }

  .c-nav__item::after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background-color: var(--color-blue-500);
    transition: 0.3s;
  }

  .c-nav__item:hover::after,
  .c-nav__item:focus::after {
    width: 100%;
  }
}
</style>
