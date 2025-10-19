import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewsSection from '../components/ReviewsSection';
import Header from '../components/Header';
import SimuladorTalla from '../components/SimuladorTalla';

const ropaAdultos = [
  { talla: 'S', pecho: '86-91 cm', cintura: '71-76 cm', cadera: '86-91 cm', tipo: 'Regular' },
  { talla: 'M', pecho: '91-96 cm', cintura: '76-81 cm', cadera: '91-96 cm', tipo: 'Slim' },
  { talla: 'L', pecho: '96-101 cm', cintura: '81-86 cm', cadera: '96-101 cm', tipo: 'Regular' },
  { talla: 'XL', pecho: '101-106 cm', cintura: '86-91 cm', cadera: '101-106 cm', tipo: 'Slim' },
];

const ropaNiños = [
  { talla: '4', pecho: '56-61 cm', cintura: '51-56 cm', cadera: '58-63 cm', tipo: 'Regular' },
  { talla: '6', pecho: '61-66 cm', cintura: '56-61 cm', cadera: '63-68 cm', tipo: 'Slim' },
  { talla: '8', pecho: '66-71 cm', cintura: '61-66 cm', cadera: '68-73 cm', tipo: 'Regular' },
];

const calzado = {
  hombres: [
    { talla: '25', equivalente: 'US 7', tipo: 'Regular' },
    { talla: '26', equivalente: 'US 8', tipo: 'Slim' },
    { talla: '27', equivalente: 'US 9', tipo: 'Regular' },
  ],
  mujeres: [
    { talla: '23', equivalente: 'US 6', tipo: 'Slim' },
    { talla: '24', equivalente: 'US 7', tipo: 'Regular' },
    { talla: '25', equivalente: 'US 8', tipo: 'Slim' },
  ],
  niños: [
    { talla: '18', equivalente: 'US 11K', tipo: 'Regular' },
    { talla: '19', equivalente: 'US 12K', tipo: 'Slim' },
    { talla: '20', equivalente: 'US 13K', tipo: 'Regular' },
  ],
  niñas: [
    { talla: '18', equivalente: 'US 11K', tipo: 'Slim' },
    { talla: '19', equivalente: 'US 12K', tipo: 'Regular' },
    { talla: '20', equivalente: 'US 13K', tipo: 'Slim' },
  ],
};

const GuiaTallas = () => {
  return (
    <>
      <Navbar />

      <Header
  navItems={['inicio', 'medidas', 'marcas', 'simulador','resenas', 'dudas']}
  backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
/>
      <main className="max-w-5xl mx-auto p-6" id="inicio">
        <h1 className="text-3xl font-bold mb-6 text-center">Guía de Tallas</h1>
        <p className="mb-6 text-gray-700 text-center">
          Consulta las medidas aproximadas para elegir la talla que mejor se adapte a ti.
        </p>

        {/* Ropa adultos */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Ropa para Hombres y Mujeres</h2>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Talla</th>
              <th className="border px-4 py-2 text-left">Pecho</th>
              <th className="border px-4 py-2 text-left">Cintura</th>
              <th className="border px-4 py-2 text-left">Cadera</th>
              <th className="border px-4 py-2 text-left">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {ropaAdultos.map(({ talla, pecho, cintura, cadera, tipo }) => (
              <tr key={talla} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{talla}</td>
                <td className="border px-4 py-2">{pecho}</td>
                <td className="border px-4 py-2">{cintura}</td>
                <td className="border px-4 py-2">{cadera}</td>
                <td className="border px-4 py-2">{tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Ropa niños y niñas */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Ropa para Niños y Niñas</h2>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Talla</th>
              <th className="border px-4 py-2 text-left">Pecho</th>
              <th className="border px-4 py-2 text-left">Cintura</th>
              <th className="border px-4 py-2 text-left">Cadera</th>
              <th className="border px-4 py-2 text-left">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {ropaNiños.map(({ talla, pecho, cintura, cadera, tipo }) => (
              <tr key={talla} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{talla}</td>
                <td className="border px-4 py-2">{pecho}</td>
                <td className="border px-4 py-2">{cintura}</td>
                <td className="border px-4 py-2">{cadera}</td>
                <td className="border px-4 py-2">{tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Calzado */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Guía de Calzado</h2>

        {Object.entries(calzado).map(([grupo, tallas]) => (
          <div key={grupo} className="mb-6">
            <h3 className="text-lg font-medium mb-2 capitalize">{grupo}</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Talla (CM)</th>
                  <th className="border px-4 py-2 text-left">Equivalente US</th>
                  <th className="border px-4 py-2 text-left">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {tallas.map(({ talla, equivalente, tipo }) => (
                  <tr key={talla + grupo} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{talla}</td>
                    <td className="border px-4 py-2">{equivalente}</td>
                    <td className="border px-4 py-2">{tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <section className="max-w-4xl mx-auto my-12" id='medidas'>
          <h2 className="text-xl font-semibold mb-4">Cómo tomar tus medidas</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Pecho:</strong> mide alrededor de la parte más ancha del busto, manteniendo la cinta horizontal.</li>
            <li><strong>Cintura:</strong> mide justo por encima del ombligo, sin apretar.</li>
            <li><strong>Cadera:</strong> mide alrededor de la parte más ancha de la cadera.</li>
            <li><strong>Largo de pierna:</strong> desde la entrepierna hasta el tobillo.</li>
            <li><strong>Talla de pie:</strong> mide desde el talón hasta la punta del dedo más largo.</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto my-12">
          <h2 className="text-xl font-semibold mb-4">Conversión internacional</h2>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">MX</th>
                <th className="border px-4 py-2">US</th>
                <th className="border px-4 py-2">EU</th>
                <th className="border px-4 py-2">UK</th>
                <th className="border px-4 py-2">CM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">26</td>
                <td className="border px-4 py-2">8</td>
                <td className="border px-4 py-2">41</td>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">26</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="max-w-4xl mx-auto my-12">
  <h2 className="text-xl font-semibold mb-4">Tallas por tipo de prenda</h2>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li><strong>Camisas:</strong> considera el ajuste en hombros y largo de manga.</li>
    <li><strong>Pantalones:</strong> revisa tiro, cintura y largo de pierna.</li>
    <li><strong>Abrigos:</strong> suelen tener corte más amplio, revisa si es Slim o Regular.</li>
    <li><strong>Calzado deportivo:</strong> puede venir ajustado, considera medio número más.</li>
  </ul>
</section>

<section className="max-w-4xl mx-auto my-12">
  <h2 className="text-xl font-semibold mb-4">Tallas especiales</h2>
  <p className="text-gray-700 mb-4">
    Algunas prendas tienen cortes específicos que afectan el ajuste. Aquí te explicamos los más comunes:
  </p>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li><strong>Slim Fit:</strong> corte ajustado al cuerpo, ideal para siluetas delgadas.</li>
    <li><strong>Regular Fit:</strong> corte estándar, cómodo y versátil.</li>
    <li><strong>Relaxed Fit:</strong> más amplio, pensado para mayor libertad de movimiento.</li>
    <li><strong>Oversized:</strong> diseño intencionalmente grande, estilo urbano.</li>
  </ul>
</section>

<section className="max-w-4xl mx-auto my-12" id='recomendación'>
  <h2 className="text-xl font-semibold mb-4">Recomendaciones por tipo de cuerpo</h2>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li><strong>Espalda ancha:</strong> evita cortes Slim en camisas, opta por Regular o Relaxed.</li>
    <li><strong>Piernas cortas:</strong> busca pantalones con tiro medio o alto para alargar visualmente.</li>
    <li><strong>Cintura pronunciada:</strong> considera prendas con ajuste elástico o corte entallado.</li>
  </ul>
</section>

<section className="max-w-4xl mx-auto my-12" id='marcas'>
  <h2 className="text-xl font-semibold mb-4">Guía de ajuste por marca</h2>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li><strong>Nike:</strong> tiende a ser más ajustado en calzado y ropa deportiva.</li>
    <li><strong>Puma:</strong> corte más relajado en sudaderas y pantalones.</li>
    <li><strong>Adidas:</strong> ajuste intermedio, revisa si es línea Performance o Originals.</li>
  </ul>
</section>

<section className="max-w-4xl mx-auto my-12" id='simulador'>
    <SimuladorTalla />
</section>

<section className="max-w-6xl mx-auto my-16" id='resenas'>
  <ReviewsSection />
</section>

<section className="max-w-4xl mx-auto my-12" id='dudas'>
  <h2 className="text-xl font-semibold mb-4">Preguntas frecuentes</h2>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li>
      <strong>¿Qué hago si estoy entre dos tallas?</strong>  
      Te recomendamos elegir la más grande si prefieres comodidad, o revisar si la prenda es elástica.
    </li>
    <li>
      <strong>¿Las tallas son ajustadas?</strong>  
      Depende del corte. Revisa si es Slim, Regular o Relaxed.
    </li>
    <li>
      <strong>¿Cómo sé si una prenda es elástica?</strong>  
      Consulta la descripción del producto o busca materiales como spandex o elastano.
    </li>
  </ul>

  {/* Bloque de redirección */}
  <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
    <p className="text-gray-700 mb-2">
      ¿Tienes más preguntas o quieres saber más sobre nuestras políticas de tallas?
    </p>
    <a
      href="/faq"
      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
    >
      Ir a la página de FAQ
    </a>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
};

export default GuiaTallas;