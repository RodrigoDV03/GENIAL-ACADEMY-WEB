import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ModalQuestions from "../../src/components/Modals/Modal_Questions/modalQuestions";

// Mock de useParams para reflejar la relación con Courses
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("ModalQuestions Component", () => {
  beforeEach(() => {
    // Simular los parámetros de la URL relacionados con Courses
    jest.requireMock("react-router-dom").useParams.mockReturnValue({
      uni_id: "UNMSM",
      area_id: "LINGUISTICA",
      course_id: "linguistica",
    });
  });

  test("no debe renderizar el modal si isOpen es false", () => {
    render(
      <MemoryRouter>
        <ModalQuestions isOpen={false} theme={{ id: "123", name: "La comunicación" }} onClose={jest.fn()} />
      </MemoryRouter>
    );

    // Verificar que el modal no se renderiza
    const modalTitle = screen.queryByText(/Preguntas de La comunicación/i);
    expect(modalTitle).not.toBeInTheDocument();
  });

  test("debe renderizar el modal con el contenido correcto basado en el tema y parámetros", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/university/:uni_id/area/:area_id/course/:course_id"
            element={
              <ModalQuestions
                isOpen={true}
                theme={{ id: "123", name: "La comunicación" }}
                onClose={jest.fn()}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
  });
  

  test("debe llamar a onClose al hacer clic en el botón de cierre", () => {
    const mockOnClose = jest.fn();

    render(
      <MemoryRouter>
        <ModalQuestions
          isOpen={true}
          theme={{ id: "123", name: "La comunicación" }}
          onClose={mockOnClose}
        />
      </MemoryRouter>
    );

    // Simular clic en el botón "X"
    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);

    // Verificar que se llama a onClose
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
