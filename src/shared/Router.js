import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
