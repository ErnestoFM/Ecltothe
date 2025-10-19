import React, { useState } from 'react';

const SimuladorTalla = () => {
  const [genero, setGenero] = useState('');
  const [pecho, setPecho] = useState('');
  const [cintura, setCintura] = useState('');
  const [cadera, setCadera] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularTalla = () => {
    // Lógica básica de sugerencia
    let talla = '';
    let tipo = '';
    let marcas = {};
    let recomendaciones = [];

    const pechoNum = parseInt(pecho);
    const cinturaNum = parseInt(cintura);
    const caderaNum = parseInt(cadera);
    const alturaNum = parseInt(altura);

    // Talla sugerida
    if (pechoNum < 90) talla = 'S';
    else if (pechoNum < 96) talla = 'M';
    else if (pechoNum < 102) talla = 'L';
    else talla = 'XL';

    // Corte sugerido
    if (cinturaNum < pechoNum - 10) tipo = 'Slim';
    else if (cinturaNum > pechoNum + 10) tipo = 'Relaxed';
    else tipo = 'Regular';

    // Equivalencias por marca
    marcas = {
      Nike: tipo === 'Slim' ? `${talla} ajustado` : `${talla} estándar`,
      Puma: tipo === 'Relaxed' ? `${talla} amplio` : `${talla} regular`,
      Adidas: `${talla} (${tipo})`,
    };

    // Recomendaciones
    if (alturaNum < 160) recomendaciones.push('Considera prendas con tiro alto para alargar visualmente.');
    if (caderaNum > pechoNum) recomendaciones.push('Busca cortes que equilibren la silueta, como fit recto.');
    if (tipo === 'Slim') recomendaciones.push('Evita telas rígidas, busca prendas con elastano.');

    // Dato de salud (IMC básico)
    const imc = alturaNum > 0 ? (cinturaNum / (alturaNum / 100) ** 2).toFixed(1) : null;

    setResultado({
      talla,
      tipo,
      marcas,
      recomendaciones,
      imc,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularTalla();
  };

  return (
    <section className="max-w-4xl mx-auto my-12" id="simulador">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">🧮 Simulador de talla</h2>
      <p className="text-gray-700 text-center mb-6">Ingresa tus medidas para obtener una sugerencia personalizada:</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Género:</label>
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>

        <input type="number" placeholder="Pecho (cm)" value={pecho} onChange={(e) => setPecho(e.target.value)} className="border rounded px-4 py-2" required />
        <input type="number" placeholder="Cintura (cm)" value={cintura} onChange={(e) => setCintura(e.target.value)} className="border rounded px-4 py-2" required />
        <input type="number" placeholder="Cadera (cm)" value={cadera} onChange={(e) => setCadera(e.target.value)} className="border rounded px-4 py-2" required />
        <input type="number" placeholder="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)} className="border rounded px-4 py-2" required />

        <button type="submit" className="col-span-1 sm:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Calcular talla
        </button>
      </form>

      {resultado && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Resultado:</h3>
          <p><strong>Talla sugerida:</strong> {resultado.talla}</p>
          <p><strong>Corte recomendado:</strong> {resultado.tipo}</p>
          <p><strong>Equivalencias por marca:</strong></p>
          <ul className="list-disc pl-6 text-gray-700">
            {Object.entries(resultado.marcas).map(([marca, valor]) => (
              <li key={marca}><strong>{marca}:</strong> {valor}</li>
            ))}
          </ul>
          {resultado.recomendaciones.length > 0 && (
            <>
              <p><strong>Recomendaciones:</strong></p>
              <ul className="list-disc pl-6 text-gray-700">
                {resultado.recomendaciones.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </>
          )}
          {resultado.imc && (
            <p className="text-sm text-gray-600 italic">
              Tu índice de masa corporal estimado es {resultado.imc}. Este dato es solo orientativo y no sustituye una evaluación médica.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default SimuladorTalla;