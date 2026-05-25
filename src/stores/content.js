import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
  const token = 'siteContent'
  const state = reactive({
    site: {
      logo: '/img/logo.webp',
    },
    banner: {
      title: 'Hello World!',
      background: '/img/sample.webp',
      buttonText: 'Ver más',
      buttonLink: '#',
    },
  })

  loadContent()

  function loadContent() {
    const savedData = localStorage.getItem(token)

    if (savedData != null) {
      Object.assign(state, JSON.parse(savedData))
    }

    return state
  }

  function saveContent(data) {
    if (!data || typeof data !== 'object' || !data.site || !data.banner) {
      console.error('Contenido inválido')
      return false
    }

    localStorage.setItem(token, JSON.stringify(data))

    return true
  }

  return {
    state,
    saveContent,
  }
})
