import { createApp } from "vue"
import LocalApp from "./apps/LocalApp.vue"
import RemoteApp from "./apps/RemoteApp.vue"
import { buildRouter } from "./router"
import { createPinia } from "pinia"
import "./assets/index.css"

const renderApp = (el: HTMLDivElement | string) => {
  const app = createApp(import.meta.env.DEV ? LocalApp : RemoteApp)

  app.use(createPinia())
  app.use(buildRouter())
  app.mount(el)
}

if (import.meta.env.DEV) {
  console.log("local build")
  renderApp("#app")
}

export { renderApp }
