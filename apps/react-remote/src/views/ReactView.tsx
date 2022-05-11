import React from "react"
import ReactDOM from "react-dom/client"

export function ReactView() {
  return <div className="bg-rose-500 text-white m-3 p-3">React View</div>
}

export default function RenderElement(el: HTMLDivElement) {
  const root = ReactDOM.createRoot(el)

  root.render(
    <React.StrictMode>
      <ReactView />
    </React.StrictMode>
  )
}
