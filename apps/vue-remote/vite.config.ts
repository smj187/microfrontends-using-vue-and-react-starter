import { fileURLToPath, URL } from "url"
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import federation from "@originjs/vite-plugin-federation"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
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
      port: 3002,
    },

    preview: {
      port: 4174,
    },
  }
})
