import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Conócenos</h1>
        <p className="text-md text-gray-700 leading-relaxed mb-8 text-center">
          Somos una empresa comprometida con la innovación, la calidad y la experiencia del cliente. Nuestro objetivo es ofrecer productos que se adapten a tu estilo de vida, con atención personalizada y tecnología de punta.
        </p>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded overflow-hidden shadow mb-12">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1VD3f2VCzY0"
            title="Video institucional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Nuestra misión</h2>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto">
            Crear experiencias memorables a través de productos funcionales, estéticos y accesibles. Creemos en el poder del diseño, la tecnología y la empatía para transformar la vida cotidiana.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">¡Síguenos!</h2>
          <div className="flex justify-center gap-6 text-gray-600 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Twitter</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">YouTube</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">TikTok</a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-gray-600 text-3xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">🐦</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">📺</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">🎵</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
;