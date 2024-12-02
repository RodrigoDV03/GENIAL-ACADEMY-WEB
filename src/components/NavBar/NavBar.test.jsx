import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

// Mock localStorage
beforeEach(() => {
  localStorage.setItem("username", "Rodrigo");
});

// Mock del componente ModalUser para simplificar pruebas
jest.mock("../Modals/Modal_User/modalUser", () => {
  return ({ isOpen, onClose }) =>
    isOpen && (
      <div role="dialog">
        <p>Contenido del Modal</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
});

test("debe mostrar el mensaje de bienvenida con el nombre del usuario", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const welcomeMessage = screen.getByText(/Bienvenido Rodrigo/i);
  expect(welcomeMessage).toBeInTheDocument();
});

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

test("debe abrir el modal al hacer clic en la imagen del usuario", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const userImage = screen.getByAltText(/User/i);

  // Simular clic en la imagen
  fireEvent.click(userImage);

  // Verificar que el modal se abre
  const modal = screen.getByRole("dialog");
  expect(modal).toBeInTheDocument();
});

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

  // Verificar que el modal no está presente
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
