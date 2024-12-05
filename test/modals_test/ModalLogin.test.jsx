import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ModalLogin from "../../src/components/Modals/Modal_Login/ModalLogin";

test("no debe renderizar el modal si isOpen es false", () => {
  render(
    <MemoryRouter>
      <ModalLogin isOpen={false} onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar que el modal no está en el DOM
  const modal = screen.queryByText(/Bienvenido a GenialAcademy/i);
  expect(modal).not.toBeInTheDocument();
});

test("debe renderizar el modal si isOpen es true", () => {
  render(
    <MemoryRouter>
      <ModalLogin isOpen={true} onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar que el texto de bienvenida se renderiza
  const welcomeMessage = screen.getByText(/Bienvenido a GenialAcademy/i);
  expect(welcomeMessage).toBeInTheDocument();

  // Verificar que la imagen se renderiza correctamente
  const successImage = screen.getByAltText(/Login_Success_Icon/i); // Agrega un `alt` si no existe
  expect(successImage).toBeInTheDocument();
});

test("debe cerrar el modal al hacer clic en el botón 'Ingresar'", () => {
  const mockOnClose = jest.fn();

  render(
    <MemoryRouter>
      <ModalLogin isOpen={true} onClose={mockOnClose} />
    </MemoryRouter>
  );

  // Simular clic en el botón 'Ingresar'
  const loginButton = screen.getByText(/Ingresar/i);
  fireEvent.click(loginButton);

  // Verificar que se llama a la función onClose
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
