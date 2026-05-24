<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardContainer from './CardContainer.vue'

const posts = ref([])
const loading = ref(true)
const error = ref(null)
const limit = 6

const fetchData = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    posts.value = response.data
  } catch (err) {
    error.value = 'No se han podido obtener los datos.'
    console.log(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Para simular el spinner
  setTimeout(() => {
    fetchData()
  }, 2000)
})
</script>

<template>
  <section class="w-full p-4" id="noticias">
    <div class="m-auto grid min-h-100 max-w-285 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div v-if="error != null" class="flex w-full flex-col items-center justify-center">
        <strong class="text-gray-500">{{ error }}</strong>
      </div>

      <CardContainer v-for="post in posts" :key="post.id" :="post" />

      <div v-show="loading" class="flex w-full flex-col items-center justify-center">
        <i class="spinner fa-solid fa-spinner"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.spinner {
  animation: spinner infinite 1s linear;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
