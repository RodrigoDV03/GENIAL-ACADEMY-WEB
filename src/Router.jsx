import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { University } from "./pages/University"
import { Area } from "./pages/Area" 
import { Course } from "./pages/Course"


export const AppRouter = () => {
    return (
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:uni_id" element={<University />}></Route>
        <Route path="/home/:uni_id/:area_id" element={<Area/>}></Route>
        <Route path="/home/:uni_id/:area_id/:course_id" element={<Course/>}></Route>


        
      </Routes>
    )
  }