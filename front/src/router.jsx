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
import Pedidos from './pages/Pedidos';
import Tallas from './pages/GuiaTallas';
import Faq from './pages/FaqPage';
import AdminPanel from './pages/priv/AdminPanel';
import CrearProducto from './pages/priv/CrearProducto';
import ModificarProducto from './pages/priv/ModificarProducto';
import EliminarProducto from './pages/priv/EliminarProducto';
import NotFound from './pages/NotFound';
import CookiesPolicy from './pages/CookiesPolicy';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/tallas" element={<Tallas />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/crear-cuenta" element={<CrearCuenta />} />
      <Route path="/perfil" element={<Configuracion />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/producto/:id" element={<ProductoDetalle />} />
      <Route path="/cookies" element={<CookiesPolicy />} />


      <Route path="*" element={<NotFound />} /> {/* Ruta para páginas no encontradas */}


      {/* Rutas Privadas*/}
      <Route path="/priv/panel" element={<AdminPanel />} />
      <Route path="/priv/crear" element={<CrearProducto />} />
      <Route path="/priv/eliminar" element={<EliminarProducto />} />
      <Route path="/priv/modificar" element={<ModificarProducto />} />

    </Routes>
  );
}

export default Router;
