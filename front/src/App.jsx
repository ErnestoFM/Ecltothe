import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Router from './router';
import { Helmet } from 'react-helmet';

function App() {
  // Establecer título dinámico

<Helmet>
  <title>{import.meta.env.VITE_APP_NAME || 'Eclothe'}</title>
  <meta name="description" content="Tienda en línea de ropa deportiva sostenible" />
</Helmet>


  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;