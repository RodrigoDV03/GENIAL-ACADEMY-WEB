import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ModalRegister from "../../src/components/Modals/Modal_Register/ModalRegister";

test("no debe renderizar el modal si isOpen es false", () => {
  render(
    <MemoryRouter>
      <ModalRegister isOpen={false} message="Se guardó correctamente" onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar que el título del modal no está en el DOM
  const modalTitle = screen.queryByText(/Se guardó correctamente/i);
  expect(modalTitle).not.toBeInTheDocument();
});

test("debe renderizar el modal con el contenido correcto si isOpen es true", () => {
  render(
    <MemoryRouter>
      <ModalRegister isOpen={true} message="Se guardó correctamente" onClose={jest.fn()} />
    </MemoryRouter>
  );

  // Verificar que el título del modal se renderiza
  const modalTitle = screen.getByText(/Se guardó correctamente/i);
  expect(modalTitle).toBeInTheDocument();

  // Verificar que la imagen se renderiza correctamente
  const successImage = screen.getByAltText(/Register_Success_Icon/i);
  expect(successImage).toBeInTheDocument();
});

test("debe llamar a onClose al hacer clic en el botón 'Ingresar'", () => {
  const mockOnClose = jest.fn();

  render(
    <MemoryRouter>
      <ModalRegister isOpen={true} message="Se guardó correctamente" onClose={mockOnClose} />
    </MemoryRouter>
  );

  // Simular clic en el botón 'Ingresar'
  const registerButton = screen.getByText(/Ingresar/i);
  fireEvent.click(registerButton);

  // Verificar que se llama a la función onClose
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
