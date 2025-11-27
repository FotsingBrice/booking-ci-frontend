// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Récupérez le nom de votre dépôt sur GitLab (par exemple, 'booking-ci-frontend')
const repoName = 'booking-ci-frontend'; 

export default defineConfig({
  plugins: [react()],
  // 🎯 Configuration pour GitLab Pages
  base: `/${repoName}/`, // Assurez-vous que le nom du dépôt est correct
  
  // Optionnel: pour l'environnement de développement local
  server: {
    port: 3000, 
  },
});