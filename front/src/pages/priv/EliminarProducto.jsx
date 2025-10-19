import React, { useEffect, useState } from 'react';

const EliminarProducto = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/api/productos')
      .then((res) => res.json())
      .then(setProductos)
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este producto?')) return;

    try {
      const res = await fetch(`/api/admin/producto/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await res.text();
      alert(data);
      setProductos(productos.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert('Error al eliminar producto');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Eliminar Producto</h1>

      <ul className="space-y-4">
        {productos.map((p) => (
          <li key={p.id} className="border p-4 rounded flex justify-between items-center">
            <span>{p.nombre} - ${p.precio}</span>
            <button
              onClick={() => handleEliminar(p.id)}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EliminarProducto;