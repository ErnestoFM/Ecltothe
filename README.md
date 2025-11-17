# Ecltothe - Frontend de E-Commerce

Este es un proyecto personal escola y que le he puesto más features y avances de manera de practica. Es una tienda en línea de ropa deportiva.
---

## 📸 Vistas Previas
<img width="959" height="460" alt="{0CE409B3-7796-49BC-8BC8-10BEA48B6D94}" src="https://github.com/user-attachments/assets/bd01e3f5-e653-4cba-8fa1-52b8078b1628" />

<img width="960" height="424" alt="{3C04FF18-48BC-45CD-B7EF-13C71A06D2AF}" src="https://github.com/user-attachments/assets/03ebf3ee-e314-4c37-b53b-1fc196373fe5" />


---

## ✨ Características Principales

* **Stack 100% Moderno:** Construido con React 19, Vite 7 y React Router 7.
* **Panel de Administrador:** Gestión completa de productos (CRUD) a través de rutas privadas.
* **SEO Optimizado:** Uso de `react-helmet` para títulos y meta-descripciones dinámicas, crucial para e-commerce.
* **Diseño Responsivo:** Totalmente construido con Tailwind CSS y sus plugins `forms`, `typography` y `aspect-ratio`.
* **Código Limpio:** Configuración de ESLint y pruebas con Vitest.

---

## 🛠️ Stack Tecnológico

Este proyecto está construido utilizando un stack de frontend moderno y de alto rendimiento:

* **Framework:** React 19 (`react`)
* **Bundler:** Vite 7 (`vite`)
* **Enrutador:** React Router 7 (`react-router-dom`)
* **Estilos:** Tailwind CSS (`tailwindcss`)
    * `@tailwindcss/forms`
    * `@tailwindcss/typography`
    * `@tailwindcss/aspect-ratio`
* **Iconos:** Lucide-react (`lucide-react`)
* **Cliente HTTP:** Axios (`axios`)
* **Gestión de `<head>` (SEO):** React Helmet (`react-helmet`)
* **Pruebas (Testing):** Vitest (`vitest`) & React Testing Library (`@testing-library/react`)
* **Linting:** ESLint (`eslint`)

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu entorno local.

### 1. Prerrequisitos

* Node.js (v18 o superior)
* `npm` (o `yarn` / `pnpm`)

### 2. Instalación

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/ErnestoFM/Ecltothe.git](https://github.com/ErnestoFM/Ecltothe.git)
    ```
2.  Navega al directorio del proyecto:
    *(Ajusta esto si tu frontend está en una subcarpeta como `/front`)*
    ```bash
    cd Ecltothe
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

### 3. Configuración de Entorno

1.  Este proyecto utiliza variables de entorno. Copia el archivo de ejemplo:
    ```bash
    cp .env.example .env
    ```
2.  Edita el archivo `.env` y añade las variables necesarias. La más importante será la URL de tu API de backend:
    ```
    # Ejemplo de variable de entorno para la API
    VITE_API_URL="http://localhost:4000/api"
    ```

### 4. Ejecutar el Proyecto

1.  **Modo Desarrollo** (con *hot-reload*):
    ```bash
    npm run dev
    ```
    El servidor se iniciará en `http://localhost:5173` (o el puerto que indique Vite).

2.  **Crear Build de Producción:**
    ```bash
    npm run build
    ```
    Los archivos optimizados se generarán en la carpeta `dist`.

### 5. Correr Pruebas (Tests)

Este proyecto está configurado con Vitest para pruebas unitarias y de integración.

* Correr todas las pruebas una vez:
    ```bash
    npm run test
    ```
* Correr pruebas en modo interactivo (*watch*):
    ```bash
    npm run test:ui
    ```
* Ver cobertura de pruebas:
    ```bash
    npm run test:coverage
    ```
