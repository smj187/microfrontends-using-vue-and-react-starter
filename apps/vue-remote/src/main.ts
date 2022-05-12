import { createApp } from "vue"
import { createPinia } from "pinia"

import LocalApp from "@/apps/LocalApp.vue"
import RemoteApp from "@/apps/RemoteApp.vue"
import "@/assets/index.css"
import { buildRouter } from "@/router"

const renderApp = (el: HTMLDivElement | string) => {
  const app = createApp(import.meta.env.DEV ? LocalApp : RemoteApp)

  app.use(createPinia())
  app.use(buildRouter())
  app.mount(el)
}

if (import.meta.env.DEV) {
  renderApp("#app")
}

export { renderApp }
