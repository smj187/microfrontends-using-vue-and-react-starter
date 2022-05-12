import { fileURLToPath, URL } from "url"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    plugins: [
      react(),
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
      port: 2998,
    },
  }
})
