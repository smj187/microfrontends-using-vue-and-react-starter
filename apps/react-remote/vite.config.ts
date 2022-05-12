import { fileURLToPath, URL } from "url"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    plugins: [
      react(),
      federation({
        name: "react-remote",
        filename: "remoteEntry.js",
        exposes: {
          "./Counter": "./src/components/Counter.tsx",
          "./ReactView": "./src/views/ReactView.tsx",
          "./main": "./src/main.tsx",
        },
        remotes: {},
        shared: [],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: `${process.env.VITE_APP_TITLE} - ${mode}`,
          },
        },
      }),
    ],

    build: {
      target: "esnext",
      cssCodeSplit: false,
    },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    server: {
      port: 3001,
    },

    preview: {
      port: 4173,
    },
  }
})
