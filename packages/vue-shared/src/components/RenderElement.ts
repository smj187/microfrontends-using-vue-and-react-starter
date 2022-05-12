import { createApp } from "vue"
import Button from "./Button.vue"

export default function RenderElement(el: HTMLDivElement | string) {
  const app = createApp(Button)

  app.mount(el)
}
