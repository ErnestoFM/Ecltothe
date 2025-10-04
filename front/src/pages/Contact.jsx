import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Componente del formulario de contacto
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Envíanos un mensaje
        </h2>
        <p className="text-gray-600">
          ¿Tienes alguna pregunta? Nos encantaría escucharte.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center">
            <span className="text-green-500 text-xl mr-3">✅</span>
            <div>
              <h3 className="text-green-800 font-semibold">¡Mensaje enviado!</h3>
              <p className="text-green-700 text-sm">Te responderemos pronto.</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="+52 33 1234 5678"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Asunto *
            </label>
            <select
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Selecciona un asunto</option>
              <option value="consulta-general">Consulta general</option>
              <option value="pedido">Consulta sobre pedido</option>
              <option value="devoluciones">Devoluciones y cambios</option>
              <option value="sostenibilidad">Sostenibilidad</option>
              <option value="colaboracion">Colaboración</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje *
          </label>
          <textarea
            name="mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Cuéntanos cómo podemos ayudarte..."
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </div>
          ) : (
            'Enviar mensaje'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Los campos marcados con * son obligatorios
        </p>
      </div>
    </div>
  );
};

// Componente principal de la página de contacto
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Contáctanos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Información de contacto */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  
                  {/* Información general */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Información de contacto
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-green-600 text-xl mr-3 mt-1">📍</span>
                        <div>
                          <p className="font-semibold text-gray-900">Dirección</p>
                          <p className="text-gray-600 text-sm">
                            Av. Principal 123<br />
                            Tonalá, Jalisco, México
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="text-green-600 text-xl mr-3 mt-1">📞</span>
                        <div>
                          <p className="font-semibold text-gray-900">Teléfono</p>
                          <p className="text-gray-600 text-sm">+52 33 1234 5678</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="text-green-600 text-xl mr-3 mt-1">✉️</span>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <p className="text-gray-600 text-sm">info@eclothe.com</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="text-green-600 text-xl mr-3 mt-1">🕒</span>
                        <div>
                          <p className="font-semibold text-gray-900">Horarios</p>
                          <p className="text-gray-600 text-sm">
                            Lun - Vie: 9:00 - 18:00<br />
                            Sáb: 10:00 - 16:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Redes sociales */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Síguenos
                    </h3>
                    <div className="flex gap-4">
                      <a href="#" className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200">
                        📘
                      </a>
                      <a href="#" className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200">
                        📸
                      </a>
                      <a href="#" className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200">
                        🐦
                      </a>
                      <a href="#" className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200">
                        🎵
                      </a>
                    </div>
                  </div>

                  {/* FAQ rápido */}
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      💡 Preguntas frecuentes
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">¿Cómo puedo rastrear mi pedido?</p>
                        <p className="text-gray-600">Te enviaremos un email con el código de seguimiento.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">¿Hacen envíos internacionales?</p>
                        <p className="text-gray-600">Actualmente solo enviamos dentro de México.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Formulario de contacto */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}