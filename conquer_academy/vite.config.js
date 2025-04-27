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
        noticia1: './noticia1.html',
        noticia2: './noticia2.html',
        quienes_somos: './quienes_somos.html',
        registro: './registro.html',

      }
    }
  }
});

