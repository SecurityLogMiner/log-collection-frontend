import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [svelte()],
  define: {
    // Expose specific environment variables to the client side
    'import.meta.env.VITE_AWS_REGION': JSON.stringify(process.env.AWS_REGION),
    'import.meta.env.VITE_TABLE_NAME': JSON.stringify(process.env.TABLE_NAME),
  },
});
