import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ModalUser from "../../src/components/Modals/Modal_User/ModalUser";

beforeEach(() => {
  // Simular un usuario en localStorage
  localStorage.setItem("username", "Rodrigo");
});

afterEach(() => {
  // Limpiar localStorage después de cada prueba
  localStorage.clear();
});

test("no debe renderizar el modal si isOpen es false", () => {
  render(
    <MemoryRouter>
      <ModalUser isOpen={false} onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar que el título del modal no está en el DOM
  const modalTitle = screen.queryByText(/Rodrigo/i);
  expect(modalTitle).not.toBeInTheDocument();
});

test("debe renderizar el modal y mostrar el nombre de usuario si isOpen es true", () => {
  render(
    <MemoryRouter>
      <ModalUser isOpen={true} onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar que el título del modal muestra el nombre de usuario
  const modalTitle = screen.getByText(/Rodrigo/i);
  expect(modalTitle).toBeInTheDocument();

  // Verificar que la imagen del usuario se renderiza
  const userAvatar = screen.getByAltText(/User Avatar/i);
  expect(userAvatar).toBeInTheDocument();
});

test("debe llamar a onClose al hacer clic en el botón de cierre", () => {
  const mockOnClose = jest.fn();

  render(
    <MemoryRouter>
      <ModalUser isOpen={true} onClose={mockOnClose} />
    </MemoryRouter>
  );

  // Simular clic en el botón de cierre
  const closeButton = screen.getByText("X");
  fireEvent.click(closeButton);

  // Verificar que se llama a la función onClose
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

test("debe renderizar los enlaces correctamente", () => {
  render(
    <MemoryRouter>
      <ModalUser isOpen={true} onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar enlace a "To do list"
  const todoListLink = screen.getByText(/To do list/i).closest("a");
  expect(todoListLink).toHaveAttribute("href", "/todolist");

  // Verificar enlace a "Cerrar Sesión"
  const logoutLink = screen.getByText(/Cerrar Sesión/i).closest("a");
  expect(logoutLink).toHaveAttribute("href", "/");
});