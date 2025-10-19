import React, { useEffect, useState } from 'react';

const ModificarProducto = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    fetch('/api/productos')
      .then((res) => res.json())
      .then(setProductos)
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  const handleEditar = (producto) => {
    setProductoEditando(producto);
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    try {
      const res = await fetch(`/api/admin/producto/${productoEditando.id}`, {
        method: 'PUT',
        body: form,
        credentials: 'include',
      });
      const data = await res.text();
      alert(data);
      setProductoEditando(null);
    } catch (err) {
      console.error(err);
      alert('Error al modificar producto');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Modificar Producto</h1>

      {!productoEditando ? (
        <ul className="space-y-4">
          {productos.map((p) => (
            <li key={p.id} className="border p-4 rounded flex justify-between items-center">
              <span>{p.nombre} - ${p.precio}</span>
              <button
                onClick={() => handleEditar(p)}
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <form onSubmit={handleGuardar} className="space-y-4">
          <input
            type="text"
            name="nombre"
            defaultValue={productoEditando.nombre}
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="number"
            name="precio"
            defaultValue={productoEditando.precio}
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            name="categoria"
            defaultValue={productoEditando.categoria}
            className="w-full border rounded px-4 py-2"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Guardar cambios
          </button>
          <button
            type="button"
            onClick={() => setProductoEditando(null)}
            className="text-gray-600 hover:underline"
          >
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default ModificarProducto;