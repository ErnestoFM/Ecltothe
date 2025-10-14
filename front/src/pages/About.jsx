import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <Navbar />
      {/* Banner con imagen genérica */}
<header className="relative w-full bg-gray-100">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
    alt="Imagen genérica de cabecera"
    className="w-full h-64 object-cover"
  />

  {/* Menú sticky con scroll horizontal en móvil y centrado en desktop */}
  <nav
    className="sticky top-24 z-40 mx-4 md:mx-auto max-w-5xl mt-4 rounded-3xl shadow-lg transition-all duration-300 bg-gray-100"
  >
    <ul
      className="flex justify-start md:justify-center space-x-8 py-4 text-gray-800 font-semibold overflow-x-auto whitespace-nowrap scrollbar-hide"
    >
      <li><a href="#inicio" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Inicio</a></li>
      <li><a href="#historia" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Historia</a></li>
      <li><a href="#mision" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Misión</a></li>
      <li><a href="#valores" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Valores y cultura</a></li>
      <li><a href="#equipo" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Equipo</a></li>
      <li><a href="#resenas" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Reseñas</a></li>
      <li><a href="#responsabilidad" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Responsabilidad social</a></li>
      <li><a href="#contacto" className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Contacto</a></li>
    </ul>
  </nav>
</header>



      <section id="inicio" className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Conócenos</h1>

        <p id="historia" className="text-md text-gray-700 leading-relaxed mb-8 text-center">
          Queriendo emprender en ropa, vimos la oportunidad de crear nuestro legado en eclothe. Desde entonces, nos hemos dedicado a ofrecer productos innovadores, de calidad y con un enfoque en la experiencia del cliente.
        </p>

        <div className="w-full max-w-4xl mx-auto rounded overflow-hidden shadow mb-12" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1VD3f2VCzY0"
            title="Video institucional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div id="mision" className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Nuestra misión</h2>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto">
            Crear experiencias memorables a través de productos funcionales, estéticos y accesibles. Creemos en el poder del diseño, la tecnología y la empatía para transformar la vida cotidiana.
          </p>
        </div>

        <div id="valores" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Valores y cultura</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-sm">
            <p><strong>Innovación:</strong> Buscamos siempre estar a la vanguardia tecnológica para ofrecer productos únicos.</p>
            <p><strong>Calidad:</strong> Nos comprometemos a entregar productos duraderos y confiables.</p>
            <p><strong>Empatía:</strong> Entendemos y valoramos las necesidades de nuestros clientes.</p>
            <p><strong>Sostenibilidad:</strong> Trabajamos para minimizar nuestro impacto ambiental.</p>
          </div>
        </div>

        <div id="equipo" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Equipo</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Fotos 4:3 responsive */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Juan Pérez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Juan Pérez</h3>
              <p className="text-sm text-gray-600">CEO & Fundador</p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="María López" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">María López</h3>
              <p className="text-sm text-gray-600">Directora de Marketing</p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Carlos Gómez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Carlos Gómez</h3>
              <p className="text-sm text-gray-600">Jefe de Desarrollo</p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Laura Martínez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Laura Martínez</h3>
              <p className="text-sm text-gray-600">Diseñadora UX/UI</p>
            </div>
          </div>
        </div>

        <div id="resenas" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Reseñas</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Cards de reseñas */}
            <div className="bg-white rounded shadow p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Ana G." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Ana G.</p>
                  <p className="text-xs text-gray-500">12 de marzo, 2024</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Excelente calidad y atención. Me encantó la sudadera térmica outdoor.</p>
            </div>

            <div className="bg-white rounded shadow p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Luis R." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Luis R.</p>
                  <p className="text-xs text-gray-500">5 de abril, 2024</p>
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ccc" viewBox="0 0 20 20" className="w-4 h-4">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Buena relación calidad-precio. Ideal para clima frío.</p>
            </div>

            <div className="bg-white rounded shadow p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="Ana M." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Ana M.</p>
                  <p className="text-xs text-gray-500">20 de febrero, 2024</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Muy buen servicio y productos. Volveré a comprar seguro.</p>
            </div>
          </div>
        </div>

        <div id="responsabilidad" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Responsabilidad social</h2>
          <p className="text-sm text-gray-700 max-w-4xl mx-auto text-center">
            En eclothe estamos comprometidos con la sostenibilidad y el bienestar social. Implementamos prácticas responsables para minimizar nuestro impacto ambiental y apoyamos proyectos comunitarios que generan un cambio positivo.
          </p>
        </div>

        <div id="contacto" className="mt-16">
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
      </section>

      <Footer />
    </>
  );
};

export default About;