/// <reference types="vite/client" />

declare module "react-remote/main" {
  export const renderApp: (el: HTMLElement) => void
}

declare module "vue-remote/main" {
  export const renderApp: (el: HTMLDivElement | string) => void
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}
