<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
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

const getBook = async () => {
  const response = await api.get(`/books/${route.params.id}`)

  title.value = response.data.title
  author.value = response.data.author
  genre.value = response.data.genre
  publisher.value = response.data.publisher
  year.value = response.data.year
  pages.value = response.data.pages
  language.value = response.data.language
  isbn.value = response.data.isbn
  available.value = response.data.available
  cover.value = response.data.cover
  description.value = response.data.description
}

const updateBook = async () => {
  await api.put(`/books/${route.params.id}`, {
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

onMounted(() => {
  getBook()
})
</script>

<template>
  <div class="container">
    <h1>Editar libro</h1>

    <form @submit.prevent="updateBook">
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
  width: 400px;
}

textarea {
  min-height: 120px;
}
</style>