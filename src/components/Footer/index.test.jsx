import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from './index';

describe('Footer Component', () => {
  test('debería representar el logotipo del pie de página', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    
    // Verificamos que el logo esté presente en el footer
    const logo = screen.getByRole('img');  
    expect(logo).toBeInTheDocument();
  });

  test('debería representar todos los enlaces de navegación del pie de página', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Verificamos que los enlaces de la navegación estén presentes
    expect(screen.getByText(/Política de privacidad/i)).toBeInTheDocument();
    expect(screen.getByText(/Ayuda/i)).toBeInTheDocument();
    expect(screen.getByText(/Acuerdo de suscripción/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobre nosotros/i)).toBeInTheDocument();
    expect(screen.getByText(/Dispositivos compatibles/i)).toBeInTheDocument();
  });

  test('debería representar todos los botones de redes sociales', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Buscamos las imágenes por su rol
    const facebookButton = screen.getAllByRole('img')[0]; 
    const instagramButton = screen.getAllByRole('img')[1]; 
    const twitterButton = screen.getAllByRole('img')[2];   
    
    expect(facebookButton).toBeInTheDocument();
    expect(instagramButton).toBeInTheDocument();
    expect(twitterButton).toBeInTheDocument();
  });

  test('debería representar el texto de derechos de autor', () => {
    render(
      <Router>
        <Footer/>
      </Router>
    );

    const copyrightText = screen.getByText(/@2024 GenialAcademy. Todos los derechos reservados/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
