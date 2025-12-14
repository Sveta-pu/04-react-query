import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/04-react-query/' : '/',
  plugins: [react()],
});
