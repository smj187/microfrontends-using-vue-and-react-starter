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
        name: "app-host",
        filename: "remoteEntry.js",
        exposes: {},
        remotes: {
          "react-remote": "http://localhost:4173/assets/remoteEntry.js",
          "vue-remote": "http://localhost:4174/assets/remoteEntry.js",
        },
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

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    server: {
      port: 3000,
    },

    preview: {
      port: 4173,
    },
  }
})
