import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const productos = [
  { id: 1, nombre: 'Camiseta deportiva', precio: 299, tipo: 'Deportiva', talla: 'M', genero: 'Hombre', marca: 'Nike', imagen: '/camisa.png' },
  { id: 2, nombre: 'Leggings de yoga', precio: 499, tipo: 'Casual', talla: 'S', genero: 'Mujer', marca: 'Adidas', imagen: '/pans.png' },
  { id: 3, nombre: 'Sudadera térmica', precio: 399, tipo: 'Outdoor', talla: 'L', genero: 'Hombre', marca: 'Puma', imagen: '/sudadera.png' },
  { id: 4, nombre: 'Short de entrenamiento', precio: 249, tipo: 'Deportiva', talla: 'M', genero: 'Hombre', marca: 'Reebok', imagen: '/short.png' },
  { id: 5, nombre: 'Top deportivo', precio: 349, tipo: 'Deportiva', talla: 'S', genero: 'Mujer', marca: 'Nike', imagen: '/top.png' },
  { id: 6, nombre: 'Joggers casuales', precio: 599, tipo: 'Casual', talla: 'L', genero: 'Mujer', marca: 'Puma', imagen: '/joggers.png' },
  { id: 7, nombre: 'Chamarra impermeable', precio: 799, tipo: 'Outdoor', talla: 'XL', genero: 'Hombre', marca: 'Columbia', imagen: '/chamarra.png' },
  { id: 8, nombre: 'Tank top básico', precio: 199, tipo: 'Casual', talla: 'M', genero: 'Mujer', marca: 'Under Armour', imagen: '/tanktop.png' },
  { id: 9, nombre: 'Pantalón térmico', precio: 449, tipo: 'Outdoor', talla: 'L', genero: 'Hombre', marca: 'North Face', imagen: '/pantalon.png' },
  { id: 10, nombre: 'Sudadera oversize', precio: 549, tipo: 'Casual', talla: 'XL', genero: 'Mujer', marca: 'Zara', imagen: '/oversize.png' },
  { id: 11, nombre: 'Camiseta sin mangas', precio: 229, tipo: 'Deportiva', talla: 'S', genero: 'Hombre', marca: 'Adidas', imagen: '/sinmangas.png' },
  { id: 12, nombre: 'Leggings compresión', precio: 529, tipo: 'Deportiva', talla: 'M', genero: 'Mujer', marca: 'Nike', imagen: '/compression.png' },
  { id: 13, nombre: 'Parka outdoor', precio: 899, tipo: 'Outdoor', talla: 'L', genero: 'Hombre', marca: 'Patagonia', imagen: '/parka.png' },
  { id: 14, nombre: 'Crop top casual', precio: 299, tipo: 'Casual', talla: 'S', genero: 'Mujer', marca: 'Bershka', imagen: '/croptop.png' },
  { id: 15, nombre: 'Pantalón jogger', precio: 479, tipo: 'Casual', talla: 'M', genero: 'Hombre', marca: 'H&M', imagen: '/joggerhombre.png' },
  { id: 16, nombre: 'Chamarra ligera', precio: 699, tipo: 'Outdoor', talla: 'M', genero: 'Mujer', marca: 'Decathlon', imagen: '/ligera.png' },
  { id: 17, nombre: 'Camiseta técnica', precio: 319, tipo: 'Deportiva', talla: 'L', genero: 'Hombre', marca: 'Under Armour', imagen: '/tecnica.png' },
  { id: 18, nombre: 'Sudadera con capucha', precio: 599, tipo: 'Casual', talla: 'M', genero: 'Mujer', marca: 'Pull&Bear', imagen: '/capucha.png' },
  { id: 19, nombre: 'Short outdoor', precio: 379, tipo: 'Outdoor', talla: 'M', genero: 'Hombre', marca: 'Quechua', imagen: '/shortoutdoor.png' },
  { id: 20, nombre: 'Top de entrenamiento', precio: 329, tipo: 'Deportiva', talla: 'S', genero: 'Mujer', marca: 'Reebok', imagen: '/topentreno.png' },
];
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

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
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

  return (
    <>
      <Navbar />

      <section className="w-full px-4 sm:px-12 py-8">
        {/* Barra de búsqueda y botón de filtros en móviles */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-2/3 border rounded px-3 py-2 text-sm"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Filtros */}
          <aside
            className={`w-full sm:w-1/4 space-y-4 ${
              showFilters ? 'block' : 'hidden'
            } sm:block`}
          >
            <h3 className="text-lg font-semibold text-gray-800">Filtrar productos</h3>
            <select name="orden" value={filtros.orden} onChange={handleFiltroChange} className="w-full border rounded px-3 py-2 text-sm">
              <option value="asc">Más barato</option>
              <option value="desc">Más caro</option>
            </select>
            <div className="flex gap-2">
              <input
                type="number"
                name="precioMin"
                value={filtros.precioMin}
                onChange={handleFiltroChange}
                placeholder="Precio mínimo"
                className="w-1/2 border rounded px-3 py-2 text-sm"
              />
              <input
                type="number"
                name="precioMax"
                value={filtros.precioMax}
                onChange={handleFiltroChange}
                placeholder="Precio máximo"
                className="w-1/2 border rounded px-3 py-2 text-sm"
              />
            </div>
            <select name="tipo" value={filtros.tipo} onChange={handleFiltroChange} className="w-full border rounded px-3 py-2 text-sm">
              <option value="">Tipo de ropa</option>
              <option value="Deportiva">Deportiva</option>
              <option value="Casual">Casual</option>
              <option value="Outdoor">Outdoor</option>
            </select>
            <select name="talla" value={filtros.talla} onChange={handleFiltroChange} className="w-full border rounded px-3 py-2 text-sm">
              <option value="">Tamaño</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <select name="genero" value={filtros.genero} onChange={handleFiltroChange} className="w-full border rounded px-3 py-2 text-sm">
              <option value="">Género</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
            <select name="marca" value={filtros.marca} onChange={handleFiltroChange} className="w-full border rounded px-3 py-2 text-sm">
              <option value="">Marca</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </select>
          </aside>

          {/* Productos */}
          <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="border rounded-lg shadow hover:shadow-md transition p-4">
                <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded mb-3" />
                <h4 className="text-base font-semibold text-gray-800 mb-1">{producto.nombre}</h4>
                <p className="text-sm text-gray-600 mb-1">{producto.tipo} · Talla {producto.talla}</p>
                <p className="text-sm text-gray-600 mb-1">{producto.genero} · {producto.marca}</p>
                <p className="text-green-700 font-bold text-lg">${producto.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Productos;
