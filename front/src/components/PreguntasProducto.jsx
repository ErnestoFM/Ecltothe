import React, { useState } from 'react';

const PreguntasProducto = ({ preguntas = [] }) => {
  const [sortBy, setSortBy] = useState('recientes');
  const [filterBy, setFilterBy] = useState('todas');

  // Filtrar por estado de respuesta
  const preguntasFiltradas = preguntas.filter((p) => {
    if (filterBy === 'contestadas') return p.respuesta?.trim();
    if (filterBy === 'sinRespuesta') return !p.respuesta?.trim();
    return true;
  });

  // Ordenar por fecha
  const preguntasOrdenadas = [...preguntasFiltradas].sort((a, b) => {
    const fechaA = new Date(a.fecha);
    const fechaB = new Date(b.fecha);
    return sortBy === 'recientes' ? fechaB - fechaA : fechaA - fechaB;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
Preguntas sobre este producto
    </h2>
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ordenar por:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="recientes">Más recientes</option>
            <option value="antiguas">Más antiguas</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por:</label>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="todas">Todas</option>
            <option value="contestadas">Solo contestadas</option>
            <option value="sinRespuesta">Sin respuesta</option>
          </select>
        </div>
      </div>

      {/* Lista de preguntas */}
      <div className="space-y-6">
        {preguntasOrdenadas.map(({ id, pregunta, respuesta, usuario, fecha }) => (
          <div key={id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-800 font-medium">{pregunta}</p>
              <p className="text-xs text-gray-500">{usuario} · {new Date(fecha).toLocaleDateString('es-ES')}</p>
            </div>
            <p className="text-sm text-gray-600">
              {respuesta?.trim() ? respuesta : <span className="italic text-gray-400">Sin respuesta aún</span>}
            </p>
          </div>
        ))}

        {preguntasOrdenadas.length === 0 && (
          <p className="text-center text-gray-500 py-12">No hay preguntas que coincidan con los filtros seleccionados.</p>
        )}
      </div>
    </section>
  );
};

export default PreguntasProducto;