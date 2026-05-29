<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const router = useRouter()

const title = ref('')
const author = ref('')

const getBook = async () => {
  const response = await api.get(`/books/${route.params.id}`)

  title.value = response.data.title
  author.value = response.data.author
}

const updateBook = async () => {
  await api.put(`/books/${route.params.id}`, {
    title: title.value,
    author: author.value
  })

  router.push('/')
}

onMounted(() => {
  getBook()
})
</script>

<template>
  <div class="container">
    <h1>Editar libro</h1>

    <form @submit.prevent="updateBook">
      <input
        v-model="title"
        type="text"
        placeholder="Título"
      />

      <input
        v-model="author"
        type="text"
        placeholder="Autor"
      />

      <button type="submit">
        Actualizar
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}
</style>