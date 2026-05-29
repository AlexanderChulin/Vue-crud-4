<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()

const title = ref('')
const author = ref('')
const genre = ref('')
const publisher = ref('')
const year = ref(0)
const pages = ref(0)
const language = ref('')
const isbn = ref('')
const available = ref(true)
const cover = ref('')
const description = ref('')

const saveBook = async () => {
  await api.post('/books', {
    title: title.value,
    author: author.value,
    genre: genre.value,
    publisher: publisher.value,
    year: year.value,
    pages: pages.value,
    language: language.value,
    isbn: isbn.value,
    available: available.value,
    cover: cover.value,
    description: description.value
  })

  router.push('/')
}
</script>

<template>
  <div class="container">
    <h1>Agregar libro</h1>

    <form @submit.prevent="saveBook">
      <input v-model="title" placeholder="Título" />

      <input v-model="author" placeholder="Autor" />

      <input v-model="genre" placeholder="Género" />

      <input v-model="publisher" placeholder="Editorial" />

      <input
        v-model="year"
        type="number"
        placeholder="Año"
      />

      <input
        v-model="pages"
        type="number"
        placeholder="Páginas"
      />

      <input v-model="language" placeholder="Idioma" />

      <input v-model="isbn" placeholder="ISBN" />

      <input v-model="cover" placeholder="URL portada" />

      <textarea
        v-model="description"
        placeholder="Descripción"
      />

      <label>
        Disponible
        <input
          v-model="available"
          type="checkbox"
        />
      </label>

      <div class="buttons">
  <button type="submit">
    Guardar
  </button>

  <button
    type="button"
    class="cancel"
    @click="router.push('/')">
    Cancelar
  </button>
</div>
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
  width: 400px;
}

textarea {
  min-height: 120px;
}
</style>