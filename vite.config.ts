import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        register: 'register.html',
        userpage: 'userpage.html',
      },
    },
  },
  server: {
    open: '/index.html',
  },
});
