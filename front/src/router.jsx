import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import IniciarSesion from './pages/IniciarSesion';
import CrearCuenta from './pages/CrearCuenta';
import Configuracion from './pages/Configuracion';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import PrivacyPage from './pages/PrivacyPolicy';
import TermsPage from './pages/TermsConditions';


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/crear-cuenta" element={<CrearCuenta />} />
      <Route path="/perfil" element={<Configuracion />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/producto/:id" element={<ProductoDetalle />} />
    </Routes>
  );
}

export default Router;
