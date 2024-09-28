import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

export const AppRouter = () => {
    return (
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    )
  }