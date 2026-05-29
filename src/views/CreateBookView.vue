<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()

const title = ref('')
const author = ref('')

const saveBook = async () => {
  await api.post('/books', {
    title: title.value,
    author: author.value
  })

  router.push('/')
}
</script>

<template>
  <div class="container">
    <h1>Agregar libro</h1>

    <form @submit.prevent="saveBook">
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
        Guardar
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