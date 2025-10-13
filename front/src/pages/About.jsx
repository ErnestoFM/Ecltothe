import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const Nosotros = () => { return ( <> <Navbar />

  <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-12">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Conócenos</h1>
    <p className="text-md text-gray-700 leading-relaxed mb-8 text-center">
      Somos una empresa comprometida con la innovación, la calidad y la experiencia del cliente. Nuestro objetivo es ofrecer productos que se adapten a tu estilo de vida, con atención personalizada y tecnología de punta.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="aspect-video w-full rounded overflow-hidden shadow">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/1VD3f2VCzY0"
          title="Video institucional"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="aspect-video w-full rounded overflow-hidden shadow">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/1VD3f2VCzY0"
          title="Video adicional"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="mt-12 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Nuestra misión</h2>
      <p className="text-sm text-gray-700 max-w-3xl mx-auto">
        Crear experiencias memorables a través de productos funcionales, estéticos y accesibles. Creemos en el poder del diseño, la tecnología y la empatía para transformar la vida cotidiana.
      </p>
    </div>
  </section>

  <Footer />
</>

); };

export default Nosotros;