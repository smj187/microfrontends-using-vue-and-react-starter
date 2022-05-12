import React from "react"
import ReactDOM from "react-dom/client"

import { LocalApp } from "./apps/LocalApp"
import { RemoteApp } from "./apps/RemoteApp"

import "./assets/index.css"

const renderApp = (el: HTMLElement) => {
  const app = ReactDOM.createRoot(el)

  app.render(
    <React.StrictMode>
      {import.meta.env.DEV ? <LocalApp /> : <RemoteApp />}
    </React.StrictMode>
  )
}

if (import.meta.env.DEV) {
  console.log("local react build")
  renderApp(document.getElementById("react_remote_app")!)
}

export { renderApp }
