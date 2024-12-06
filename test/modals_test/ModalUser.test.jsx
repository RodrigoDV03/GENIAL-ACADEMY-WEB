import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import ModalUser from "../../src/components/Modals/Modal_User/ModalUser";

// Configuración de mock para Redux
const mockStore = configureStore([]);
const mockDispatch = jest.fn();

// Mock de useDispatch y useNavigate
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

beforeEach(() => {
  // Simular un usuario en localStorage
  localStorage.setItem("username", "Rodrigo");
});

afterEach(() => {
  // Limpiar localStorage después de cada prueba
  localStorage.clear();
});

test("no debe renderizar el modal si isOpen es false", () => {
  const store = mockStore({});

  render(
    <Provider store={store}>
      <MemoryRouter>
        <ModalUser isOpen={false} onClose={jest.fn()} />
      </MemoryRouter>
    </Provider>
  );

  // Verificar que el título del modal no está en el DOM
  const modalTitle = screen.queryByText(/Rodrigo/i);
  expect(modalTitle).not.toBeInTheDocument();
});

test("debe renderizar el modal y mostrar el nombre de usuario si isOpen es true", () => {
  const store = mockStore({});

  render(
    <Provider store={store}>
      <MemoryRouter>
        <ModalUser isOpen={true} onClose={jest.fn()} />
      </MemoryRouter>
    </Provider>
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
  const store = mockStore({});

  render(
    <Provider store={store}>
      <MemoryRouter>
        <ModalUser isOpen={true} onClose={mockOnClose} />
      </MemoryRouter>
    </Provider>
  );

  // Simular clic en el botón de cierre
  const closeButton = screen.getByText("X");
  fireEvent.click(closeButton);

  // Verificar que se llama a la función onClose
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

test("debe renderizar los enlaces correctamente", () => {
  const store = mockStore({});

  render(
    <Provider store={store}>
      <MemoryRouter>
        <ModalUser isOpen={true} onClose={jest.fn()} />
      </MemoryRouter>
    </Provider>
  );

  // Verificar enlace a "To do list"
  const todoListLink = screen.getByText(/To do list/i).closest("a");
  expect(todoListLink).toHaveAttribute("href", "/todolist");

  // Verificar que el botón de "Cerrar Sesión" esté presente
  const logoutButton = screen.getByText(/Cerrar Sesión/i);
  expect(logoutButton).toBeInTheDocument();
});
