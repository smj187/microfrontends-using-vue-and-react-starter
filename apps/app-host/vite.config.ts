import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app-host",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        "react-remote": "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: [],
    }),
  ],
})
