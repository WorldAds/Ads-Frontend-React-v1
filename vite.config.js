import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow LAN access
    port: 3001, // Use port 3000
    strictPort: true, // Don't try next port if current port is in use
    open: false, // Don't auto-open browser
  }
});
