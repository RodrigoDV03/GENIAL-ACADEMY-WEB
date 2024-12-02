import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ModalExam from "./ModalExam";

test("no debe renderizar el modal si isOpen es false", () => {
  render(
    <MemoryRouter>
      <ModalExam isOpen={false} onClose={jest.fn()} />
    </MemoryRouter>
  );

  const modal = screen.queryByRole("dialog");
  expect(modal).not.toBeInTheDocument();
});

test("debe renderizar el modal con el contenido correcto si isOpen es true", () => {
  render(
    <MemoryRouter initialEntries={["/exam/123"]}>
      <Routes>
        <Route path="/exam/:uniId" element={<ModalExam isOpen={true} onClose={jest.fn()} />} />
      </Routes>
    </MemoryRouter>
  );

  const modalTitle = screen.getByText(/Estructura de examen de admisión por área de 123/i);
  expect(modalTitle).toBeInTheDocument();
});

test("debe llamar a onClose al hacer clic en el botón de cierre", () => {
  const mockOnClose = jest.fn();

  render(
    <MemoryRouter initialEntries={["/exam/123"]}>
      <Routes>
        <Route path="/exam/:uniId" element={<ModalExam isOpen={true} onClose={mockOnClose} />} />
      </Routes>
    </MemoryRouter>
  );

  const closeButton = screen.getByText("X");
  fireEvent.click(closeButton);

  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
