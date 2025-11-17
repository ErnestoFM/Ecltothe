import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';
import ErrorBoundary from '../components/ErrorBoundary';
import BlogVisualizer from '../components/BlogVisualizer';
import PublicidadSlider from '../components/PublicidadSlider';
import Loading from '../components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const products = [
    { title: 'Camiseta Eclothe', image: '/pans_gris.png', price: 299 },
    { title: 'Sudadera Eco', image: '/pans_gris.png', price: 499 },
    { title: 'Short', image: '/pans_gris.png', price: 499 },
    { title: 'Short', image: '/pans_gris.png', price: 499 },
    { title: 'Short', image: '/pans_gris.png', price: 499 },
    { title: 'Short', image: '/camisa1.png', price: 499 },
    { title: 'Short', image: '/img/sudadera.jpg', price: 499 },
    { title: 'Short', image: '/img/sudadera.jpg', price: 499 },
    { title: 'Camiseta', image: '/img/sudadera.jpg', price: 499 }
  ];

  const ofertas = products.slice(0, 6);

  // Simular carga de datos
  useEffect(() => {
    // Simular carga (puedes quitar esto cuando tengas datos reales)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Mostrar loading mientras carga
  if (isLoading) {
    return <Loading type="overlay" text="Cargando página..." />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <main className="flex-grow bg-gray-50">
        <PublicidadSlider />
      </main>
      
      <main className="flex-grow bg-gray-50 p-6">
        <Carrusel products={ofertas} />
      </main>

      <main className="flex-grow bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Productos destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </main>
      
      <BlogVisualizer />
      <Footer />
    </div>
  );
}