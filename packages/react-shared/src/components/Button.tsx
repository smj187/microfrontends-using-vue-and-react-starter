import React from "react"
import ReactDOM from "react-dom/client"

export function Button() {
  const [counter, setCounter] = React.useState(0)
  return (
    <div
      onClick={() => setCounter(counter + 1)}
      className="w-60 h-16 rounded bg-yellow-400 text-slate-900 dark:bg-rose-500 dark:text-white cursor-pointer select-none flex items-center justify-center"
    >
      <span className="text-xl font-bold">React Button: {counter}</span>
    </div>
  )
}

export default function RenderElement(el: HTMLDivElement) {
  const root = ReactDOM.createRoot(el)

  root.render(
    <React.StrictMode>
      <Button />
    </React.StrictMode>
  )
}
