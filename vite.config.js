import { build, defineConfig } from "vite";

export default defineConfig({
    base: "/2D-Portfolio",
    build: {
        minify: "terser",
    },
});