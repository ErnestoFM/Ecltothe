import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ReviewsSection from '../components/ReviewsSection';

const About = () => {
  return (
    <>
      <Navbar />
      <Header />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <section id="conócenos" className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Conócenos</h1>

          <p className="text-md text-gray-700 leading-relaxed mb-8 text-center">
            Queriendo emprender en ropa, vimos la oportunidad de crear nuestro legado en eclothe. Desde entonces, nos hemos dedicado a ofrecer productos innovadores, de calidad y con un enfoque en la experiencia del cliente.
          </p>

          <div className="w-full max-w-4xl mx-auto rounded overflow-hidden shadow mb-12" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1VD3f2VCzY0"
              title="Video institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="misión" className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Nuestra Misión</h2>
            <p className="text-md text-gray-700 max-w-3xl mx-auto mb-4 text-center leading-relaxed">
              En eclothe, nuestra misión es crear experiencias memorables a través de productos funcionales, estéticos y accesibles. Creemos en el poder del diseño, la tecnología y la empatía para transformar la vida cotidiana.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold text-lg mb-2">Propósito</h3>
                <p className="text-sm text-gray-600">
                  Democratizar el acceso a ropa de alta calidad que combine funcionalidad, estilo y sostenibilidad. Queremos que todos puedan disfrutar de la moda sin comprometer el medio ambiente.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-semibold text-lg mb-2">Innovación</h3>
                <p className="text-sm text-gray-600">
                  Integrar tecnología y diseño para crear productos que mejoren la experiencia del usuario. Estamos constantemente innovando para ofrecer soluciones creativas y efectivas.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-semibold text-lg mb-2">Compromiso</h3>
                <p className="text-sm text-gray-600">
                  Mantener los más altos estándares de calidad y servicio en cada interacción con nuestros clientes. Estamos comprometidos con la satisfacción de nuestros clientes y con hacer de cada experiencia una experiencia memorable.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2 text-center">Nuestros Objetivos</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 max-w-3xl mx-auto">
                <li>Ofrecer productos de alta calidad que superen las expectativas de nuestros clientes</li>
                <li>Reducir nuestro impacto ambiental a través de prácticas sostenibles</li>
                <li>Fomentar una cultura de innovación y mejora continua en nuestra empresa</li>
                <li>Crear una comunidad de clientes satisfechos que se sientan valorados y apoyados</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="valores" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Valores y Cultura</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Nuestros valores son el fundamento de todo lo que hacemos. Guían nuestras decisiones, acciones y la manera en que nos relacionamos con clientes, colaboradores y comunidades.
          </p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovación</h3>
                  <p className="text-sm text-gray-700">
                    Buscamos siempre estar a la vanguardia tecnológica para ofrecer productos únicos. Fomentamos la creatividad y el pensamiento disruptivo en cada área de nuestra empresa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⭐</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Calidad</h3>
                  <p className="text-sm text-gray-700">
                    Nos comprometemos a entregar productos duraderos y confiables. Cada artículo pasa por rigurosos controles de calidad para garantizar la satisfacción total del cliente.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">❤️</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Empatía</h3>
                  <p className="text-sm text-gray-700">
                    Entendemos y valoramos las necesidades de nuestros clientes. Escuchamos activamente y nos ponemos en su lugar para crear experiencias significativas y personalizadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sostenibilidad</h3>
                  <p className="text-sm text-gray-700">
                    Trabajamos para minimizar nuestro impacto ambiental. Utilizamos materiales reciclados, procesos eco-amigables y promovemos la economía circular.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Aprendizaje Continuo</h3>
                  <p className="text-sm text-gray-700">
                    Promovemos una cultura de mejora constante. Invertimos en capacitación y desarrollo profesional de nuestro equipo para estar siempre actualizados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Excelencia</h3>
                  <p className="text-sm text-gray-700">
                    Nos esforzamos por superar expectativas en cada interacción. La excelencia no es un acto, sino un hábito que practicamos diariamente en todos los niveles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nuestro Equipo</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Conoce a las personas apasionadas que hacen posible eclothe. Un equipo diverso, talentoso y comprometido con la excelencia.
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Juan Pérez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Juan Pérez</h3>
              <p className="text-sm text-gray-600 mb-2">CEO & Fundador</p>
              <p className="text-xs text-gray-500 text-center">Visionario con 15 años de experiencia en retail</p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="María López" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">María López</h3>
              <p className="text-sm text-gray-600 mb-2">Directora de Marketing</p>
              <p className="text-xs text-gray-500 text-center">Experta en estrategias digitales y branding</p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Carlos Gómez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Carlos Gómez</h3>
              <p className="text-sm text-gray-600 mb-2">Jefe de Desarrollo</p>
              <p className="text-xs text-gray-500 text-center">Ingeniero con pasión por la innovación tecnológica</p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Laura Martínez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Laura Martínez</h3>
              <p className="text-sm text-gray-600 mb-2">Diseñadora UX/UI</p>
              <p className="text-xs text-gray-500 text-center">Creativa enfocada en experiencias memorables</p>
            </div>
          </div>
        </section>
        
        <section id="reseñas">
          <ReviewsSection />
        </section>
        <section id="responsabilidad" className="mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Responsabilidad Social y Ambiental</h2>
            <p className="text-md text-gray-700 max-w-4xl mx-auto mb-8 text-center leading-relaxed">
              En eclothe estamos comprometidos con la sostenibilidad y el bienestar social. Implementamos prácticas responsables para minimizar nuestro impacto ambiental y apoyamos proyectos comunitarios que generan un cambio positivo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">🌍</div>
                  <h3 className="font-semibold text-lg">Compromiso Ambiental</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Uso de materiales reciclados y orgánicos en el 70% de nuestros productos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Reducción del 50% en emisiones de CO₂ en nuestros procesos de producción</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Programa de reciclaje textil: recogemos prendas usadas para darles nueva vida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Embalaje 100% biodegradable y compostable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">🤲</div>
                  <h3 className="font-semibold text-lg">Impacto Social</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Colaboración con cooperativas locales para generar empleo y desarrollo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Apoyo a proyectos educativos y de salud en comunidades vulnerables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Promoción de prácticas laborales justas y seguras</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="contacto" className="mt-16 pb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contacto y ubicación</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-2">Dirección: Calle Falsa 123, Ciudad, País</p>
            <p className="mb-2">Teléfono: +52 123 456 7890</p>
            <p className="mb-6">Correo: contacto@eclothe.com</p>
            <div className="w-full h-64 rounded overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1234567890123!2d-99.123456789!3d19.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f123456789ab%3A0x123456789abcdef!2sCalle%20Falsa%20123!5e0!3m2!1ses!2smx!4v1612345678901"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;