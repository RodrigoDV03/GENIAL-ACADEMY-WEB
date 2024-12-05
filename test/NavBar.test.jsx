import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";

// Mock del contexto useScore
jest.mock("../src/context/ScoreContext", () => ({
  useScore: jest.fn(),
}));

import { useScore } from "../src/context/ScoreContext";

// Configuración previa a cada test
beforeEach(() => {
  // Simular datos en localStorage
  localStorage.setItem("username", "Rodrigo");

  // Mockear el estado que devuelve useScore
  useScore.mockReturnValue({
    state: { score: 100 }, // Simula un estado válido
  });
});

// Mock del componente ModalUser para simplificar pruebas
jest.mock("../src/components/Modals/Modal_User/modalUser", () => {
  return ({ isOpen, onClose }) =>
    isOpen && (
      <div role="dialog">
        <p>Contenido del Modal</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
});

// Test: Verifica que se muestra el mensaje de bienvenida con el nombre del usuario
test("debe mostrar el mensaje de bienvenida con el nombre del usuario", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const welcomeMessage = screen.getByText(/Bienvenido Rodrigo/i);
  expect(welcomeMessage).toBeInTheDocument();
});

// Test: Verifica que la imagen del usuario se renderiza
test("debe renderizar la imagen del usuario", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const userImage = screen.getByAltText(/User/i);
  expect(userImage).toBeInTheDocument();
  expect(userImage).toHaveAttribute("src", "/src/assets/images/userMenu.png");
});

// Test: Verifica que el modal se abre al hacer clic en la imagen del usuario
test("debe abrir el modal al hacer clic en la imagen del usuario", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const userImage = screen.getByAltText(/User/i);

  // Simular clic en la imagen del usuario
  fireEvent.click(userImage);

  // Verificar que el modal se abre
  const modal = screen.getByRole("dialog");
  expect(modal).toBeInTheDocument();
});

// Test: Verifica que el modal se cierra al hacer clic en el botón de cierre
test("debe cerrar el modal al hacer clic en el botón de cierre", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const userImage = screen.getByAltText(/User/i);

  // Abrir el modal
  fireEvent.click(userImage);

  // Simular el cierre del modal
  const closeButton = screen.getByText(/Cerrar/i);
  fireEvent.click(closeButton);

  // Verificar que el modal ya no está presente
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
