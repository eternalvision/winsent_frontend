import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/mixins.scss";`,
            },
        },
    },
    plugins: [react()],
    base: "./",
});
