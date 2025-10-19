import React, { useState } from 'react';

const CrearProudcto = () => {
  const [variaciones, setVariaciones] = useState([
    { talla: 'M', color: '', stock: 0 },
  ]);

  const handleAgregarVariacion = () => {
    setVariaciones([...variaciones, { talla: 'M', color: '', stock: 0 }]);
  };

  const handleEliminarVariacion = (index) => {
    const nuevas = [...variaciones];
    nuevas.splice(index, 1);
    setVariaciones(nuevas);
  };

  const handleVariacionChange = (index, campo, valor) => {
    const nuevas = [...variaciones];
    nuevas[index][campo] = valor;
    setVariaciones(nuevas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append('variaciones', JSON.stringify(variaciones));

    try {
      const res = await fetch('/api/admin/agregarProducto', {
        method: 'POST',
        body: form,
        credentials: 'include',
      });

      const data = await res.text();
      alert(data);
      e.target.reset();
      setVariaciones([{ talla: 'M', color: '', stock: 0 }]);
    } catch (err) {
      console.error(err);
      alert('Error al guardar el producto');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Agregar Nuevo Producto</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block font-medium mb-1">Nombre del Producto:</label>
          <input type="text" id="nombre" name="nombre" required className="w-full border rounded px-4 py-2" />
        </div>

        <div>
          <label htmlFor="descripcion" className="block font-medium mb-1">Descripción:</label>
          <textarea id="descripcion" name="descripcion" className="w-full border rounded px-4 py-2" />
        </div>

        <div>
          <label htmlFor="precio" className="block font-medium mb-1">Precio:</label>
          <input type="number" id="precio" name="precio" step="0.01" required className="w-full border rounded px-4 py-2" />
        </div>

        <h2 className="text-xl font-semibold mt-8">Variaciones (Talla, Color, Stock)</h2>
        <div id="variaciones-container" className="space-y-4">
          {variaciones.map((v, i) => (
            <div key={i} className="border p-4 rounded-md space-y-2">
              <div>
                <label htmlFor={`talla-${i}`} className="block font-medium mb-1">Talla:</label>
                <select
                  id={`talla-${i}`}
                  value={v.talla}
                  onChange={(e) => handleVariacionChange(i, 'talla', e.target.value)}
                  className="w-full border rounded px-4 py-2"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <div>
                <label htmlFor={`color-${i}`} className="block font-medium mb-1">Color:</label>
                <input
                  type="text"
                  id={`color-${i}`}
                  value={v.color}
                  onChange={(e) => handleVariacionChange(i, 'color', e.target.value)}
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor={`stock-${i}`} className="block font-medium mb-1">Stock:</label>
                <input
                  type="number"
                  id={`stock-${i}`}
                  value={v.stock}
                  min="0"
                  onChange={(e) => handleVariacionChange(i, 'stock', e.target.value)}
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <button
                type="button"
                onClick={() => handleEliminarVariacion(i)}
                className="text-red-600 hover:underline mt-2"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAgregarVariacion}
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200"
        >
          Agregar Otra Variación
        </button>

        <div>
          <label htmlFor="imagenes" className="block font-medium mb-1">URL de Imágenes (separadas por coma):</label>
          <textarea id="imagenes" name="imagenes" className="w-full border rounded px-4 py-2" />
        </div>

        <div>
          <label htmlFor="categoria" className="block font-medium mb-1">Categoría:</label>
          <input type="text" id="categoria" name="categoria" className="w-full border rounded px-4 py-2" />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="activo" name="activo" value="true" defaultChecked />
          <label htmlFor="activo" className="font-medium">Activo</label>
        </div>

        <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default CrearProudcto;