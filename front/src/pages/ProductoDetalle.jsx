import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Star, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

const productos = [
  {
    id: 3,
    nombre: 'Sudadera térmica outdoor',
    precio: 399,
    marca: 'Puma',
    tipo: 'Outdoor',
    genero: 'Hombre',
    descripcion: 'Sudadera térmica ideal para actividades al aire libre. Material resistente, interior afelpado y diseño ergonómico.',
    imagenes: ['/sudadera.jpg', '/sudadera2.jpg', '/sudadera3.jpg'],
    tallas: ['S', 'M', 'L', 'XL'],
  },
];

const beneficios = [
  { icon: ShieldCheck, texto: 'Compra protegida con garantía de entrega' },
  { icon: Truck, texto: 'Envío gratis a todo México' },
  { icon: RotateCcw, texto: 'Devoluciones fáciles hasta 30 días' },
  { icon: Star, texto: 'Producto con alta calificación por usuarios' },
];

const reseñas = [
  {
    usuario: 'Carlos M.',
    comentario: 'Excelente calidad, la sudadera es muy cómoda y abriga bien.',
    calificacion: 5,
  },
  {
    usuario: 'Ana G.',
    comentario: 'Me encantó el diseño y llegó muy rápido. Recomendado.',
    calificacion: 4,
  },
  {
    usuario: 'Luis R.',
    comentario: 'Buena relación calidad-precio. Ideal para clima frío.',
    calificacion: 5,
  },
];

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto?.imagenes[0]);
  const [zoomActivo, setZoomActivo] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [likeActivo, setLikeActivo] = useState(false);
  const [bounceBuy, setBounceBuy] = useState(false);
  const [bounceCart, setBounceCart] = useState(false);

  if (!producto) {
    return (
      <>
        <Navbar />
        <section className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Producto no encontrado</h2>
          <p className="text-sm text-gray-600">Verifica el ID o regresa a la página de productos.</p>
        </section>
        <Footer />
      </>
    );
  }

  const activarZoom = () => {
    setTimeout(() => setZoomActivo(true), 3000);
  };

  const desactivarZoom = () => {
    setZoomActivo(false);
  };

  const animar = (tipo) => {
    if (tipo === 'buy') {
      setBounceBuy(true);
      setTimeout(() => setBounceBuy(false), 300);
    } else {
      setBounceCart(true);
      setTimeout(() => setBounceCart(false), 300);
    }
  };

  const animarLike = () => {
    setLikeActivo(true);
    setTimeout(() => setLikeActivo(false), 300);
  };

  return (
    <>
      <Navbar />

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="hidden sm:flex flex-col gap-2">
            {producto.imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniatura ${index + 1}`}
                onClick={() => setImagenSeleccionada(img)}
                className={`w-16 h-16 object-cover rounded cursor-pointer border ${img === imagenSeleccionada ? 'border-green-600' : 'border-transparent'} hover:scale-105 transition-transform duration-300`}
              />
            ))}
          </div>

          <div
            className="w-full relative overflow-hidden"
            onMouseEnter={activarZoom}
            onMouseLeave={desactivarZoom}
          >
            <img
              src={imagenSeleccionada}
              alt={producto.nombre}
              className={`w-full h-auto object-cover rounded shadow transition-transform duration-1000 ease-in-out ${zoomActivo ? 'scale-125' : 'scale-100'}`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{producto.nombre}</h1>
            <p className="text-sm text-gray-600 mb-1">Marca: {producto.marca}</p>
            <p className="text-sm text-gray-600 mb-1">Tipo: {producto.tipo}</p>
            <p className="text-sm text-gray-600 mb-1">Género: {producto.genero}</p>
            <p className="text-green-700 text-3xl font-bold mb-6">${producto.precio}</p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Selecciona talla:</label>
              <div className="flex gap-2">
                {producto.tallas.map((talla) => (
                  <button
                    key={talla}
                    onClick={() => setTallaSeleccionada(talla)}
                    className={`px-3 py-1 border rounded ${tallaSeleccionada === talla ? 'bg-green-600 text-white' : 'bg-white text-gray-800'} hover:bg-green-500 hover:text-white transition`}
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad:</label>
              <select
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value))}
                className="border rounded px-3 py-2 text-sm w-24"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => animar('buy')}
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition transform ${bounceBuy ? 'scale-105' : ''}`}
              >
                Comprar ahora
              </button>

              <button
                onClick={() => animar('cart')}
                className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded flex items-center gap-2 transition transform ${bounceCart ? 'scale-105' : ''}`}
              >
                <ShoppingCart size={18} /> Agregar al carrito
              </button>

              <button
                onClick={animarLike}
                className={`bg-white border border-gray-300 text-gray-600 hover:text-red-500 hover:border-red-500 p-3 rounded-full transition transform ${likeActivo ? 'scale-125' : ''}`}
              >
                <Heart size={18} />
              </button>
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {beneficios.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                  <Icon size={18} className="text-green-600" />
                  {item.texto}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Descripción del producto</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{producto.descripcion}</p>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Reseñas de clientes</h2>
        <div className="space-y-6">
          {reseñas.map((r, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-800">{r.usuario}</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < r.calificacion ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">{r.comentario}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductoDetalle;


