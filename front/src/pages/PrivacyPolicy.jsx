import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de <span className="text-green-600">Privacidad</span>
            </h1>
            <p className="text-gray-600">
              Última actualización: 3 de Octubre, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                En Eclothe ("nosotros", "nuestro" o "la empresa"), nos comprometemos a proteger 
                su privacidad y los datos personales que nos confía. Esta Política de Privacidad 
                explica cómo recopilamos, usamos, compartimos y protegemos su información personal 
                cuando utiliza nuestro sitio web y servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 Información que nos proporciona</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección de envío y facturación</li>
                <li>Información de pago (procesada de forma segura por terceros)</li>
                <li>Historial de compras y preferencias</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.2 Información recopilada automáticamente</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Cookies y tecnologías similares</li>
                <li>Datos de geolocalización aproximada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Utilizamos su Información</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Procesar y gestionar sus pedidos</li>
                <li>Enviar confirmaciones de compra y actualizaciones de envío</li>
                <li>Proporcionar servicio al cliente y soporte</li>
                <li>Personalizar su experiencia de compra</li>
                <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir 
                su información con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Proveedores de servicios:</strong> Empresas que procesan pagos, gestionan envíos y proporcionan servicios de marketing</li>
                <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
                <li><strong>Transferencias comerciales:</strong> En caso de fusión, venta o transferencia de activos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos cookies para mejorar su experiencia de navegación. Las cookies son 
                pequeños archivos de texto almacenados en su dispositivo. Puede configurar su 
                navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Tipos de cookies que usamos:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                <li><strong>Funcionales:</strong> Recuerdan sus preferencias</li>
                <li><strong>Analíticas:</strong> Nos ayudan a entender cómo usa el sitio</li>
                <li><strong>Marketing:</strong> Personalizan los anuncios que ve</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de 
                Particulares (LFPDPPP) de México, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Acceder</strong> a sus datos personales</li>
                <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
                <li><strong>Cancelar</strong> sus datos cuando sean innecesarios</li>
                <li><strong>Oponerse</strong> al tratamiento de sus datos</li>
                <li><strong>Revocar</strong> su consentimiento en cualquier momento</li>
                <li><strong>Limitar</strong> el uso y divulgación de sus datos</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Para ejercer estos derechos, contáctenos en: <a href="mailto:privacidad@eclothe.com" className="text-green-600 hover:underline">privacidad@eclothe.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seguridad de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para 
                proteger su información personal contra acceso no autorizado, pérdida o alteración. 
                Esto incluye cifrado SSL, servidores seguros y controles de acceso restringidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos su información personal solo durante el tiempo necesario para cumplir 
                con los propósitos descritos en esta política, a menos que la ley requiera un 
                período de retención más largo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferencias Internacionales</h2>
              <p className="text-gray-700 leading-relaxed">
                Sus datos pueden ser transferidos y procesados en países fuera de México. 
                Nos aseguramos de que estas transferencias cumplan con las leyes de protección 
                de datos aplicables y que sus datos estén protegidos adecuadamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Menores de Edad</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
                intencionalmente información personal de menores. Si descubrimos que hemos 
                recopilado datos de un menor, los eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos 
                sobre cambios significativos publicando la nueva política en nuestro sitio web 
                y actualizando la fecha de "Última actualización".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, 
                puede contactarnos:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-800"><strong>Eclothe</strong></p>
                <p className="text-gray-700">Av. Principal 123, Tonalá, Jalisco, México</p>
                <p className="text-gray-700">Email: <a href="mailto:privacidad@eclothe.com" className="text-green-600 hover:underline">privacidad@eclothe.com</a></p>
                <p className="text-gray-700">Teléfono: +52 33 1234 5678</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}