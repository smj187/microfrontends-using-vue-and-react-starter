import { Suspense } from "react"
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import Home from "../views/HomeView"
import RemoteView from "../views/RemoteView"

export function RemoteApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/react-remote/*" element={<RemoteView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
