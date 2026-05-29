<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    |
    <RouterLink to="/create">Agregar</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 20px;
  display: flex;
  gap: 10px;
}

a {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}
</style>