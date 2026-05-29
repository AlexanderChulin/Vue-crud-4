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

```vue
<template>
  <div class="container">
    <h1>Biblioteca</h1>

    <div class="books-grid">
      <div
        class="book-card"
        v-for="book in books"
        :key="book.id"
      >
        <img
          :src="book.cover"
          :alt="book.title"
        />

        <h2>{{ book.title }}</h2>

        <p><strong>Autor:</strong> {{ book.author }}</p>

        <p><strong>Género:</strong> {{ book.genre }}</p>

        <p><strong>Año:</strong> {{ book.year }}</p>

        <p><strong>Páginas:</strong> {{ book.pages }}</p>

        <p><strong>Idioma:</strong> {{ book.language }}</p>

        <p><strong>ISBN:</strong> {{ book.isbn }}</p>

        <p>
          <strong>Disponible:</strong>
          {{ book.available ? 'Sí' : 'No' }}
        </p>

        <p class="description">
          {{ book.description }}
        </p>

        <div class="actions">
          <RouterLink :to="`/edit/${book.id}`">
            Editar
          </RouterLink>

          <button @click="deleteBook(book.id)">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
```


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

```css
<style scoped>
.container {
  padding: 20px;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.book-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
}

.book-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.description {
  margin-top: 10px;
}

.actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}
</style>
```
