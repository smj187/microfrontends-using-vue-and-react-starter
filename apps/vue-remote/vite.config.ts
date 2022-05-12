import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue-remote",
      filename: "remoteEntry.js",
      exposes: {
        "./main": "./src/main.ts",
      },
      remotes: {},
      shared: [],
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
})
