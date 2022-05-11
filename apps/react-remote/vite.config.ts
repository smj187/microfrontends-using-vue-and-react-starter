import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react-remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/components/Counter.tsx",
        "./ReactView": "./src/views/ReactView.tsx",
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
