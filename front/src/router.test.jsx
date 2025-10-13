import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from './router';

// Mocks básicos para los componentes de página
vi.mock('./pages/Home', () => ({ default: () => <div>Home Page</div> }));
vi.mock('./pages/Contact', () => ({ default: () => <div>Contact Page</div> }));
vi.mock('./pages/About', () => ({ default: () => <div>About Page</div> }));
vi.mock('./pages/Blog', () => ({ default: () => <div>Blog Page</div> }));
vi.mock('./pages/IniciarSesion', () => ({ default: () => <div>Iniciar Sesión</div> }));
vi.mock('./pages/CrearCuenta', () => ({ default: () => <div>Crear Cuenta</div> }));
vi.mock('./pages/Configuracion', () => ({ default: () => <div>Configuración</div> }));
vi.mock('./pages/Productos', () => ({ default: () => <div>Productos</div> }));
vi.mock('./pages/ProductoDetalle', () => ({ default: () => <div>Detalle del Producto</div> }));
vi.mock('./pages/PrivacyPolicy', () => ({ default: () => <div>Privacidad</div> }));
vi.mock('./pages/TermsConditions', () => ({ default: () => <div>Términos</div> }));

describe('Router.jsx', () => {
  const rutas = [
    { path: '/', texto: 'Home Page' },
    { path: '/contact', texto: 'Contact Page' },
    { path: '/about', texto: 'About Page' },
    { path: '/blog', texto: 'Blog Page' },
    { path: '/iniciarSesion', texto: 'Iniciar Sesión' },
    { path: '/crear-cuenta', texto: 'Crear Cuenta' },
    { path: '/perfil', texto: 'Configuración' },
    { path: '/privacidad', texto: 'Privacidad' },
    { path: '/terminos', texto: 'Términos' },
    { path: '/productos', texto: 'Productos' },
    { path: '/producto/123', texto: 'Detalle del Producto' },
  ];

  rutas.forEach(({ path, texto }) => {
    it(`renderiza correctamente la ruta ${path}`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Router />
        </MemoryRouter>
      );
      expect(screen.getByText(texto)).toBeInTheDocument();
    });
  });
});
