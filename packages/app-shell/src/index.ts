import { createApp } from "vue"
import { createPinia } from "pinia"

import Shell from "./components/Shell.vue"
import Link from "./components/Link.vue"

const mountShell = (element: HTMLDivElement | string) => {
  const app = createApp(Shell)
  app.use(createPinia())
  app.mount(element)
}

export { Shell, Link, mountShell }
