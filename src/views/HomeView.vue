<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../services/api'

interface Book {
  id: number
  title: string
  author: string
}

const books = ref<Book[]>([])

const getBooks = async () => {
  const response = await api.get('/books')
  books.value = response.data
}

const deleteBook = async (id: number) => {
  await api.delete(`/books/${id}`)
  getBooks()
}

onMounted(() => {
  getBooks()
})
</script>

<template>
  <div class="container">
    <h1>Libros</h1>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>
            <RouterLink :to="`/edit/${book.id}`">
              Editar
            </RouterLink>

            <button @click="deleteBook(book.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
}

button {
  margin-left: 10px;
}
</style>