# Vue CRUD (Vite + Vue 3)

CRUD construido con Vue 3 y Vite. Incluye vistas para listar, crear y editar libros, y un archivo `db.json` para pruebas con `json-server`.

**Estado:** Prototipo / desarrollo

## Requisitos

- Node.js >= 20.19.0 (o >= 22.12.0)
- npm

Nota: Vite requiere una versión moderna de Node; si al ejecutar `npm run dev` aparece un error sobre la versión de Node, actualice usando `nvm` o el instalador oficial.

## Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repo>
cd Vue-crud4
```

2. Instalar dependencias:

```bash
npm install
```

## Desarrollo

Iniciar la aplicación en modo desarrollo (Vite):

```bash
npm run dev
```

Si quiere servir la API de prueba local basada en `db.json`:

```bash
# Instalar json-server globalmente o usar npx
npx json-server --watch db.json --port 3000
```

La API quedará disponible en `http://localhost:3000` (ajuste el puerto si es necesario).

## Build para producción

```bash
npm run build
npm run preview
```

## Docker (opcional)

El repositorio incluye `Dockerfile` y `docker-compose.yml`. Para levantar la app con Docker:

```bash
docker compose up --build
```

## Estructura del proyecto

- `src/` – código fuente de la aplicación
  - `views/` – vistas (`HomeView.vue`, `CreateBookView.vue`, `EditBookView.vue`)
  - `components/` – componentes reutilizables (p. ej. `Navbar.vue`)
  - `router/` – definiciones de rutas (`index.ts`)
  - `services/` – cliente API (axios)
- `db.json` – datos de ejemplo para `json-server`

## API — Endpoints de ejemplo (json-server)

La API de prueba expone la colección `books` en la raíz del servidor. Asumiendo `json-server` corriendo en `http://localhost:3000`, los endpoints principales son:

- **Listar libros (GET):** `GET /books`

```bash
curl http://localhost:3000/books
```

- **Obtener libro por id (GET):** `GET /books/:id`

```bash
curl http://localhost:3000/books/1
```

- **Crear libro (POST):** `POST /books`

Ejemplo de petición:

```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Nuevo libro",
    "author": "Autor Ejemplo",
    "year": 2026,
    "available": true
  }'
```

- **Actualizar libro (PUT):** `PUT /books/:id` (reemplaza todo el recurso)

```bash
curl -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Clean Code (edición actualizada)",
    "author": "Robert C. Martin",
    "year": 2008,
    "available": true
  }'
```

- **Borrar libro (DELETE):** `DELETE /books/:id`

```bash
curl -X DELETE http://localhost:3000/books/1
```

### Parámetros y filtros útiles

- Paginación: `?_page=1&_limit=10`
- Búsqueda simple (q): `?q=Pragmatic`
- Orden y sort: `?_sort=year&_order=desc`
- Filtrado por campo: `?author=Andrew%20Hunt`

---
