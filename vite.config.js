import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    // Base path for deployed website
    // npm run build -> 
    base: "/web/",
    // Shorthands for paths
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    plugins: [vue()],
})
