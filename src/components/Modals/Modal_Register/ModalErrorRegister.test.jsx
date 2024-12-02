import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalErrorRegister from "./ModalErrorRegister";

test("no debe renderizar el modal si isOpen es false", () => {
  render(
    <ModalErrorRegister isOpen={false} onClose={jest.fn()} errorMessage="Error genérico" />
  );

  // Verificar que el contenido del modal no está en el DOM
  const modalTitle = screen.queryByText(/Error de Inicio de Sesión/i);
  expect(modalTitle).not.toBeInTheDocument();
});

test("debe renderizar el modal y mostrar el mensaje de error si isOpen es true", () => {
  render(
    <ModalErrorRegister isOpen={true} onClose={jest.fn()} errorMessage="Ocurrió un error inesperado" />
  );

  // Verificar que el título del modal se renderiza
  const modalTitle = screen.getByText(/Error de Inicio de Sesión/i);
  expect(modalTitle).toBeInTheDocument();

  // Verificar que el mensaje de error se renderiza correctamente
  const errorMessage = screen.getByText(/Ocurrió un error inesperado/i);
  expect(errorMessage).toBeInTheDocument();
});

test("debe llamar a onClose al hacer clic en el botón 'Cerrar'", () => {
  const mockOnClose = jest.fn();

  render(
    <ModalErrorRegister isOpen={true} onClose={mockOnClose} errorMessage="Error genérico" />
  );

  // Simular clic en el botón "Cerrar"
  const closeButton = screen.getByText(/Cerrar/i);
  fireEvent.click(closeButton);

  // Verificar que se llama a la función onClose
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
