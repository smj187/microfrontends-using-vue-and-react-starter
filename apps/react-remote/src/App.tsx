import { useState } from "react"
import logo from "./logo.svg"
import { Counter } from "./components/Counter"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-indigo-900 min-h-screen">
      <Counter />
    </div>
  )
}

export default App
