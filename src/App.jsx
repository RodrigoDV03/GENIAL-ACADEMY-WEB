import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Course from './pages/Course/Course';
import Library from './pages/Library/Library';
import List from './pages/List/List';
import Aside from './components/Aside/Aside';
import NavBar from './components/NavBar/NavBar';
import University from './pages/University/University';
import { Area } from './pages/Area/Area';
import Courses from './pages/Courses/Courses';
import { LandingPage } from './pages/Landing/LandingPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de Autenticación sin Aside y sin el estilo de app-container */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas con Aside y estilos específicos */}
        <Route 
          path="/*" 
          element={
            <div className="app-container">
              <Aside />
              <div className="main-content">
                <NavBar />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/cursos" element={<Course />} />
                  <Route path="/cursos/:uni_id" element={<University />} />
                  <Route path="/cursos/:uni_id/:area_id" element={<Area />} />
                  <Route path="/cursos/:uni_id/:area_id/:course_id" element={<Courses />} />
                  <Route path="/libros" element={<Library />} />
                  <Route path="/list" element={<List />} />
                </Routes>
              </div>
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
