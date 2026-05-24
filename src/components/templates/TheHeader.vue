<script setup>
import { onMounted, ref } from 'vue'

const logo = ref(null)
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

const toggleMenu = () => {
  isNavOpen.value = isNavOpen.value ? false : true
  console.log(isNavOpen.value)
}

onMounted(() => {
  isNavOpen.value = false
})
</script>

<template>
  <header class="w-screen">
    <section class="max-w-285 m-auto flex flex-row justify-between p-3">
      <div class="flex justify-start items-center">
        <img v-if="logo !== null" src="" alt="" />
        <span v-else class="uppercase font-bold">Logo here</span>
      </div>
      <nav class="c-nav relative flex flex-col" :data-nav-open="isNavOpen">
        <button class="c-nav__button size-10 sm:hidden" @click="toggleMenu">
          <i class="fa-solid fa-bars text-[25px]"></i>
        </button>
        <ul class="c-nav__list flex flex-col justify-end sm:flex-row sm:gap-1">
          <li
            v-for="(item, index) in nav"
            :key="index"
            class="c-nav__item w-full p-3 text-right sm:p-1"
          >
            <RouterLink :to="item.path" class="w-full block" active-class="current"
              >{{ item.text }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>
<style lang="postcss" scoped>
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
