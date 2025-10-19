import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Mujer', to: '/mujer' },
    { name: 'Hombre', to: '/hombre' },
    { name: 'Ofertas', to: '/ofertas' }
  ];

  const customerService = [
    { name: 'Contacto', to: '/contacto' },
    { name: 'Envíos', to: '/envios' },
    { name: 'Preguntas Frecuentes', to: '/faq' },
    { name: 'Guía de tallas', to: '/tallas' }
  ];

  const company = [
    { name: 'Sobre nosotros', to: '/nosotros' },
    { name: 'Blog', to: '/blog' }
  ];

    const legal = [
    { name: 'Política de privacidad', to: '/privacidad' },
    { name: 'Términos y condiciones', to: '/terminos' },
    { name: 'Cookies', to: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Logo y descripción */}
          <div className="sm:col-span-2 xl:col-span-2">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              <span className="text-green-400">e-</span>clothe
            </h2>
            <p className="text-gray-300 text-sm mb-4 lg:mb-6 leading-relaxed">
              Moda sostenible y consciente para un futuro mejor. Descubre nuestra colección 
              de ropa eco-friendly hecha con materiales reciclados y procesos responsables.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 text-green-400">
                Suscríbete al newsletter
              </h3>
              <div className="flex flex-col gap-2 max-w-md">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="w-full px-3 lg:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
                />
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-200 font-medium text-sm">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold mb-3 lg:mb-4 text-green-400">Enlaces rápidos</h3>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.to} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atención al cliente */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold mb-3 lg:mb-4 text-green-400">Atención al cliente</h3>
            <ul className="space-y-2 lg:space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.to} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa y Redes sociales */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold mb-3 lg:mb-4 text-green-400">Empresa</h3>
            <ul className="space-y-2 lg:space-y-3 mb-6">
              {company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.to} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Redes sociales */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-green-400">Síguenos</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xl"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xl"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xl"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xl"
                  aria-label="TikTok"
                >
                  🎵
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certificaciones eco */}
        <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 lg:gap-4 text-xs text-gray-400">
              <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full whitespace-nowrap">🌱 Carbon Neutral</span>
              <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full whitespace-nowrap">♻️ Materiales Reciclados</span>
              <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full whitespace-nowrap">🏷️ Comercio Justo</span>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-4 lg:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-xs text-gray-400 order-2 md:order-1">
              © {new Date().getFullYear()} Eclothe. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 order-1 md:order-2">
              {legal.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <a 
                    href={link.to} 
                    className="text-xs text-gray-400 hover:text-green-400 transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                  {index < legal.length - 1 && (
                    <span className="text-gray-600 mx-2 hidden sm:inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;