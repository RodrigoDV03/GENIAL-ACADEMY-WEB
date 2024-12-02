import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./Aside";

describe('Aside Component', () => {
    test('Verificacion de enlaces de navegación', () => {
      render(
        <Router>
          <Aside />
        </Router>
      );
  

      expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
      expect(screen.getByText(/Cursos/i)).toBeInTheDocument();
      expect(screen.getByText(/Libros/i)).toBeInTheDocument();
      expect(screen.getByText(/To do list/i)).toBeInTheDocument();
      expect(screen.getByText(/Pomodoro/i)).toBeInTheDocument();
      expect(screen.getByText(/Cerrar sesión/i)).toBeInTheDocument();
    });
  
    test('debe resaltar el enlace activo cuando se hace clic', () => {
      render(
        <Router>
          <Aside />
        </Router>
      );
  
      // Simulación de ir al "inicio" simulación de "click"
      const homeLink = screen.getByText(/Inicio/i);
      fireEvent.click(homeLink);
  
      // Verificamos que el enlace de "Inicio" tiene la clase "active"
      expect(homeLink.closest('li')).toHaveClass('active');
    });
  
    test('debe cambiar el enlace activo cuando se hace clic en un enlace diferente', () => {
      render(
        <Router>
          <Aside />
        </Router>
      );
  
      // Encontramos y hacemos clic en "Cursos"
      const cursosLink = screen.getByText(/Cursos/i);
      fireEvent.click(cursosLink);
  
      // Verificamos que "Cursos" es el enlace activo
      expect(cursosLink.closest('li')).toHaveClass('active');
      
      // Aseguramos que el enlace "Inicio" ya no esté activo
      const homeLink = screen.getByText(/Inicio/i);
      expect(homeLink.closest('li')).not.toHaveClass('active');
    });
  });
