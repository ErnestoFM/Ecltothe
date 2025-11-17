import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, X, ChevronLeft, ChevronRight } from 'lucide-react';

const MOCK_API_URL = '../mock/producto.json';

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filtros, setFiltros] = useState({
    tipo: '',
    talla: '',
    genero: '',
    marca: '',
    orden: 'asc',
    precioMin: '',
    precioMax: '',
  });
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(MOCK_API_URL);
        setProductos(response.data);
        setError(null);
      } catch (err) {
        console.error("Error al cargar productos mock:", err);
        setError("No se pudieron cargar los productos. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextImage = (productoId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productoId]: ((prev[productoId] || 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (productoId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productoId]: ((prev[productoId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getProductImages = (producto) => {
    // Si imagen es un array, usarlo directamente
    if (Array.isArray(producto.imagen)) {
      return producto.imagen;
    }
    // Si es un string, convertirlo en array
    return [producto.imagen];
  };

  const productosFiltrados = productos
    .filter((p) =>
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filtros.tipo ? p.tipo === filtros.tipo : true) &&
      (filtros.talla ? p.talla === filtros.talla : true) &&
      (filtros.genero ? p.genero === filtros.genero : true) &&
      (filtros.marca ? p.marca === filtros.marca : true) &&
      (filtros.precioMin ? p.precio >= parseInt(filtros.precioMin) : true) &&
      (filtros.precioMax ? p.precio <= parseInt(filtros.precioMax) : true)
    )
    .sort((a, b) =>
      filtros.orden === 'asc' ? a.precio - b.precio : b.precio - a.precio
    );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 font-medium">Cargando productos...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="text-red-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Oops!</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Reintentar
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Descubre Nuestros Productos</h1>
          <p className="text-lg md:text-xl text-blue-100">Encuentra el estilo perfecto para ti</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barra de búsqueda mejorada */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm"
            />
          </div>
          
          {/* Botón de filtros móvil */}
          <div className="flex justify-center mt-4 sm:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <SlidersHorizontal size={20} />
              {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          {/* Filtros mejorados */}
          <aside
            className={`w-full sm:w-1/4 space-y-4 ${
              showFilters ? 'block' : 'hidden'
            } sm:block`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-md sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Filtros</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ordenar por precio</label>
                  <select 
                    name="orden" 
                    value={filtros.orden} 
                    onChange={handleFiltroChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition bg-white"
                  >
                    <option value="asc">💰 Más barato</option>
                    <option value="desc">💎 Más caro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rango de precio</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="precioMin"
                      value={filtros.precioMin}
                      onChange={handleFiltroChange}
                      placeholder="Mín"
                      className="w-1/2 border-2 border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                    <input
                      type="number"
                      name="precioMax"
                      value={filtros.precioMax}
                      onChange={handleFiltroChange}
                      placeholder="Máx"
                      className="w-1/2 border-2 border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de ropa</label>
                  <select 
                    name="tipo" 
                    value={filtros.tipo} 
                    onChange={handleFiltroChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
                  >
                    <option value="">Todos</option>
                    <option value="Deportiva">🏃 Deportiva</option>
                    <option value="Casual">👕 Casual</option>
                    <option value="Outdoor">🏔️ Outdoor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tamaño</label>
                  <select 
                    name="talla" 
                    value={filtros.talla} 
                    onChange={handleFiltroChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
                  >
                    <option value="">Todas</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Género</label>
                  <select 
                    name="genero" 
                    value={filtros.genero} 
                    onChange={handleFiltroChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition bg-white"
                  >
                    <option value="">Todos</option>
                    <option value="Hombre">👨 Hombre</option>
                    <option value="Mujer">👩 Mujer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Marca</label>
                  <select 
                    name="marca" 
                    value={filtros.marca} 
                    onChange={handleFiltroChange} 
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition bg-white"
                  >
                    <option value="">Todas</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Puma">Puma</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid de productos mejorado */}
          <div className="w-full sm:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600 font-medium">
                {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => {
                  const imagenes = getProductImages(producto);
                  const currentIndex = currentImageIndex[producto.id] || 0;
                  const hasMultipleImages = imagenes.length > 1;

                  return (
                    <div 
                      key={producto.id} 
                      className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                        <img 
                          src={imagenes[currentIndex]} 
                          alt={`${producto.nombre} - imagen ${currentIndex + 1}`} 
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        
                        {/* Flechas de navegación */}
                        {hasMultipleImages && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage(producto.id, imagenes.length);
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <ChevronLeft size={20} className="text-gray-800" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage(producto.id, imagenes.length);
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <ChevronRight size={20} className="text-gray-800" />
                            </button>

                            {/* Indicadores de puntos */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {imagenes.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => ({ ...prev, [producto.id]: idx }));
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentIndex 
                                      ? 'bg-white w-6' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}

                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-gray-700">{producto.marca}</span>
                        </div>

                        {/* Contador de imágenes */}
                        {hasMultipleImages && (
                          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                            <span className="text-xs font-semibold text-white">
                              {currentIndex + 1}/{imagenes.length}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                          {producto.nombre}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
                            {producto.tipo}
                          </span>
                          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-medium">
                            Talla {producto.talla}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{producto.genero}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            ${producto.precio}
                          </p>
                          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition">
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full py-20">
                  <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No encontramos productos</h3>
                    <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Productos;