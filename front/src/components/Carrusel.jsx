import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Carrusel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const getVisibleProducts = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const nextIndex = (currentIndex + 1) % products.length;
    return {
      prev: products[prevIndex],
      current: products[currentIndex],
      next: products[nextIndex],
    };
  };

  const { prev, current, next } = getVisibleProducts();

  return (
    <section className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          <span className="text-green-600">Ofertas</span> destacadas
        </h2>

        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Previsualización izquierda */}
          <div className="w-1/4 hidden sm:block transform scale-90 opacity-30 blur-sm transition-all duration-300">
            <img
              src={prev.image}
              alt={prev.title}
              loading="lazy"
              className="rounded-xl object-cover h-48 w-full"
            />
          </div>

          {/* Producto principal */}
          <div className="w-full sm:w-1/2 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl bg-gray-50 rounded-xl p-6">
            <img
              src={current.image}
              alt={current.title}
              loading="lazy"
              className="rounded-xl object-cover h-56 w-full mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{current.title}</h3>
            <p className="text-green-600 font-bold text-2xl">${current.price}</p>
            <span className="text-sm text-red-500 font-medium block mt-1 mb-4">¡Oferta limitada!</span>
            <Link
              to={`/producto/${current.id}`}
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Comprar ahora
            </Link>
          </div>

          {/* Previsualización derecha */}
          <div className="w-1/4 hidden sm:block transform scale-90 opacity-30 blur-sm transition-all duration-300">
            <img
              src={next.image}
              alt={next.title}
              className="rounded-xl object-cover h-48 w-full"
            />
          </div>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-green-100 transition-colors duration-200 z-10"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-green-100 transition-colors duration-200 z-10"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
