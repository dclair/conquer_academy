import { defineConfig } from 'vite';

export default defineConfig({
  base: '/conquer_academy/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        contacto: './contacto.html',  // Incluye cada archivo HTML aquí si es necesario
        cursos: './cursos.html',
        curso1: './curso1.html',
        curso2: './curso2.html',
        curso3: './curso3.html',
        blog: './blog.html',
        login: './login.html',
        login1: './login.php',
        backend: './backend.php',
        quienes_somos: './quienes_somos.html',
        registro: './registro.html',

      }
    }
  }
});

