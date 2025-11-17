import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';

const faqData = {
  pedidos: [
    { pregunta: '¿Cómo puedo rastrear mi pedido?', respuesta: 'Recibirás un correo con el código de seguimiento una vez que tu pedido sea enviado.' },
    { pregunta: '¿Cuánto tarda el envío?', respuesta: 'Los envíos dentro de México tardan entre 2 y 5 días hábiles.' },
  ],
  pagos: [
    { pregunta: '¿Qué métodos de pago aceptan?', respuesta: 'Aceptamos tarjetas de crédito, débito, PayPal y transferencias bancarias.' },
    { pregunta: '¿Puedo pagar en efectivo?', respuesta: 'Sí, puedes pagar en OXXO o tiendas participantes usando tu número de pedido.' },
  ],
  devoluciones: [
    { pregunta: '¿Puedo cambiar la talla si no me queda?', respuesta: 'Sí, tienes hasta 30 días para solicitar un cambio sin costo adicional.' },
    { pregunta: '¿Cómo solicito una devolución?', respuesta: 'Entra a tu cuenta, selecciona el pedido y haz clic en "Solicitar devolución".' },
  ],
  tallas: [
    { pregunta: '¿Cómo sé si una prenda es Slim o Regular?', respuesta: 'Revisa la descripción del producto o consulta la guía de tallas.' },
    { pregunta: '¿Tienen un simulador de talla?', respuesta: 'Sí, puedes usar el simulador en la página de producto para obtener una sugerencia personalizada.' },
  ],
  cuenta: [
    { pregunta: '¿Cómo creo una cuenta?', respuesta: 'Haz clic en "Registrarse" en la parte superior derecha y completa tus datos.' },
    { pregunta: '¿Es seguro guardar mi información?', respuesta: 'Sí, usamos cifrado y protocolos seguros para proteger tus datos.' },
  ],
  promociones: [
    { pregunta: '¿Dónde ingreso mi cupón?', respuesta: 'En el carrito, antes de pagar, verás un campo para ingresar tu código de descuento.' },
    { pregunta: '¿Los cupones tienen fecha de vencimiento?', respuesta: 'Sí, cada cupón tiene una vigencia específica que se indica al recibirlo.' },
  ],
  sostenibilidad: [
    { pregunta: '¿Usan materiales reciclados?', respuesta: 'Sí, muchas de nuestras prendas están hechas con algodón orgánico y poliéster reciclado.' },
    { pregunta: '¿Tienen certificaciones ecológicas?', respuesta: 'Trabajamos con proveedores certificados por GOTS y OEKO-TEX.' },
  ],
};

const FaqPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const categorias = Object.keys(faqData);
  
  const normalizarTexto = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filtrarPreguntas = (preguntas) =>
    preguntas.filter(({ pregunta, respuesta }) => {
      const query = normalizarTexto(busqueda);
      return (
        normalizarTexto(pregunta).includes(query) ||
        normalizarTexto(respuesta).includes(query)
      );
    });

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">❓ Preguntas Frecuentes</h1>

        {/* Buscador */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="¿Tienes una pregunta?"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Navegación por categorías */}
        <nav className="flex flex-wrap gap-3 justify-center mb-10">
          {categorias.map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </a>
          ))}
        </nav>

        {/* Secciones FAQ */}
        {categorias.map((cat) => (
          <section key={cat} id={cat} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">{cat}</h2>
            <div className="space-y-4">
              {filtrarPreguntas(faqData[cat]).map(({ pregunta, respuesta }, i) => (
                <FaqItem
                  key={i}
                  pregunta={pregunta}
                  respuesta={respuesta}
                  preguntaId={`pregunta-${cat}-${i}`}
                  respuestaId={`respuesta-${cat}-${i}`}
                />
              ))}
              {filtrarPreguntas(faqData[cat]).length === 0 && (
                <p className="text-gray-500 italic">No hay preguntas que coincidan con tu búsqueda.</p>
              )}
            </div>
          </section>
        ))}

        {/* Formulario de contacto */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">¿No encontraste lo que buscabas?</h2>
          <p className="text-gray-700 mb-4">Envíanos tu pregunta y te responderemos lo antes posible.</p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Tu nombre" className="border rounded px-4 py-2" />
            <input type="email" placeholder="Tu correo" className="border rounded px-4 py-2" />
            <textarea
              placeholder="Escribe tu pregunta aquí..."
              className="sm:col-span-2 border rounded px-4 py-2 h-32 resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Enviar pregunta
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
