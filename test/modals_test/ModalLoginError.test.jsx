import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalErrorLogin from "../../src/components/Modals/Modal_Login/ModalErrorLogin";

test("no debe renderizar el modal si isOpen es false", () => {
  render(<ModalErrorLogin isOpen={false} onClose={jest.fn()} errorMessage="Error genérico" />);

  // Verificar que el contenido del modal no está en el DOM
  const modalTitle = screen.queryByText(/Error de Inicio de Sesión/i);
  expect(modalTitle).not.toBeInTheDocument();
});

test("debe mostrar el modal y el mensaje de error si isOpen es true", () => {
  render(<ModalErrorLogin isOpen={true} onClose={jest.fn()} errorMessage="Credenciales incorrectas" />);

  // Verificar que el título del modal se renderiza
  const modalTitle = screen.getByText(/Error de Inicio de Sesión/i);
  expect(modalTitle).toBeInTheDocument();
});

test("debe llamar a onClose al hacer clic en el botón 'Cerrar'", () => {
  const mockOnClose = jest.fn();

  render(<ModalErrorLogin isOpen={true} onClose={mockOnClose} errorMessage="Credenciales incorrectas" />);

  // Simular clic en el botón "Cerrar"
  const closeButton = screen.getByText(/Cerrar/i);
  fireEvent.click(closeButton);

  // Verificar que se llama a la función onClose
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
