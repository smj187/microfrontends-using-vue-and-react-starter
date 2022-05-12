import { Suspense } from "react"
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"

import Home from "@/views/HomeView"
import RemoteView from "@/views/RemoteView"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home"> Home </Link>
        <Link to="/react-remote"> Remote </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/react-remote/*" element={<RemoteView />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
