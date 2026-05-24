<script setup>
import { ref } from 'vue'
import SidebarForm from '../SidebarForm.vue'

const isOpen = ref(true)

const toggleMenu = () => {
  isOpen.value = isOpen.value ? false : true
}
</script>

<template>
  <aside :data-is-open="isOpen" class="c-sidebar flex flex-col rounded bg-white pb-10">
    <header class="c-sidebar__header w-full border-b border-gray-400 p-4">
      <h2 class="text-xl font-bold">Editar sitio web</h2>
      <button class="c-sidebar__button" @click="toggleMenu">
        <i class="fa-solid fa-pen text-[25px]"></i>
      </button>
    </header>

    <SidebarForm />
  </aside>
</template>

<style scoped>
.c-sidebar {
  bottom: 0;
  filter: drop-shadow(0px -5px 10px rgba(0, 0, 0, 0.15));
  left: 0;
  max-height: 80dvh;
  position: fixed;
  transform: translateY(0%);
  transition: 0.3s;
  width: 100dvw;
  z-index: 100;
}

.c-sidebar[data-is-open='true'] {
  transform: translateY(100%);
}

.c-sidebar__header {
  position: relative;
}

.c-sidebar__button {
  background-color: var(--color-white);
  border-radius: 100px 100px 0 0;
  left: 0;
  margin: auto;
  padding: calc(var(--spacing) * 4) calc(var(--spacing) * 2);
  position: absolute;
  right: 0;
  top: -50px;
  width: 64px;
}

@media (min-width: 640px) {
  .c-sidebar {
    height: 100dvh;
    max-height: unset;
    top: 0;
    transform: translateX(0%);
    width: min(60dvw, 500px);
  }

  .c-sidebar[data-is-open='true'] {
    transform: translateX(-100%);
  }

  .c-sidebar__button {
    border-radius: 0 100px 100px 0;
    left: unset;
    margin: unset;
    padding: calc(var(--spacing) * 4) calc(var(--spacing) * 4);
    right: -60px;
    top: 160px;
  }
}
</style>
