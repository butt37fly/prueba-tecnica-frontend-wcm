<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardContainer from './CardContainer.vue'

const posts = ref([])
const loading = ref(true)
const error = ref(null)
const limit = 6

const fetchData = async () => {
  const cache = sessionStorage.getItem('posts')

  if (cache) {
    posts.value = JSON.parse(cache)
    loading.value = false
    return
  }

  try {
    const postsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    )

    posts.value = postsResponse.data.map((post) => ({
      ...post,
      image: `https://picsum.photos/600/400?random=${post.id}`,
    }))

    sessionStorage.setItem('posts', JSON.stringify(posts.value))
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
  <section class="flex w-full flex-col items-center justify-center gap-6 px-4 py-10" id="noticias">
    <h2 class="font-primary text-3xl font-semibold sm:text-5xl">Noticias</h2>
    <div class="m-auto grid min-h-100 max-w-285 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-if="error != null"
        class="col-span-full flex w-full flex-col items-center justify-center"
      >
        <strong class="text-gray-500">{{ error }}</strong>
      </div>

      <CardContainer v-for="post in posts" :key="post.id" :post="post" />

      <div v-show="loading" class="col-span-full flex w-full flex-col items-center justify-center">
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
