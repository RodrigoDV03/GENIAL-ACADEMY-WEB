import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from '../src/components/Footer/index';

describe('Footer Component', () => {
  test("debería representar el logotipo del pie de página", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
  
    // Buscar la imagen del logotipo por su texto alternativo
    const logoImage = screen.getByAltText("Logotipo GenialAcademy");
    expect(logoImage).toBeInTheDocument();
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

  // Verificar cada ícono de redes sociales
    const facebookIcon = screen.getByAltText("Facebook");
    const instagramIcon = screen.getByAltText("Instagram");
    const twitterIcon = screen.getByAltText("Twitter");

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();

    // Verificar las rutas de las imágenes
    expect(facebookIcon).toHaveAttribute("src", "/src/assets/images/facebook.png");
    expect(instagramIcon).toHaveAttribute("src", "/src/assets/images/instagram.png");
    expect(twitterIcon).toHaveAttribute("src", "/src/assets/images/twitter.png");
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
