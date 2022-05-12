import React from "react"
import { Route, Routes, Link } from "react-router-dom"

const ViewA = React.lazy(() => import("./ViewA"))
const ViewB = React.lazy(() => import("./ViewB"))
const ViewC = React.lazy(() => import("./ViewC"))

export default function RemoteView() {
  return (
    <div>
      <div className="bg-indigo-600 text-white text-center p-3 flex items-center justify-center space-x-3">
        <Link to="/react-remote/a">React View A</Link>
        <span>|</span>
        <Link to="/react-remote/b">React View B</Link>
        <span>|</span>
        <Link to="/react-remote/c">React View C</Link>
      </div>

      <Routes>
        <Route path="a" element={<ViewA />} />
        <Route path="b" element={<ViewB />} />
        <Route path="c" element={<ViewC />} />
      </Routes>
    </div>
  )
}
