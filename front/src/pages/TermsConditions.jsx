import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsConditions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Términos y <span className="text-green-600">Condiciones</span>
            </h1>
            <p className="text-gray-600">
              Última actualización: 3 de Octubre, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Bienvenido a Eclothe. Al acceder y utilizar este sitio web, usted acepta estar 
                sujeto a estos Términos y Condiciones de Uso. Si no está de acuerdo con alguno 
                de estos términos, por favor no utilice nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definiciones</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>"Sitio":</strong> Se refiere al sitio web de Eclothe</li>
                <li><strong>"Usuario":</strong> Cualquier persona que acceda al sitio</li>
                <li><strong>"Productos":</strong> Los artículos de ropa y accesorios ofrecidos en venta</li>
                <li><strong>"Servicios":</strong> Todas las funcionalidades ofrecidas en el sitio</li>
                <li><strong>"Cuenta":</strong> El perfil de usuario registrado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso del Sitio Web</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.1 Elegibilidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Debe tener al menos 18 años para realizar compras en nuestro sitio. Al utilizar 
                el sitio, usted declara que tiene la edad legal requerida.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.2 Cuenta de Usuario</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Para realizar compras, debe crear una cuenta proporcionando información veraz y 
                actualizada. Usted es responsable de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mantener la confidencialidad de su contraseña</li>
                <li>Todas las actividades realizadas bajo su cuenta</li>
                <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.3 Uso Prohibido</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Usted se compromete a NO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Utilizar el sitio para fines ilegales</li>
                <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
                <li>Distribuir virus o código malicioso</li>
                <li>Recopilar información de otros usuarios sin su consentimiento</li>
                <li>Realizar ingeniería inversa del sitio</li>
                <li>Usar bots o automatización para realizar compras</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compras y Pagos</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.1 Precios</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Todos los precios están en pesos mexicanos (MXN)</li>
                <li>Los precios incluyen IVA (16%)</li>
                <li>Nos reservamos el derecho de modificar precios sin previo aviso</li>
                <li>El precio aplicable es el mostrado al momento de realizar el pedido</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.2 Proceso de Compra</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Al realizar un pedido:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Recibirá una confirmación de pedido por email</li>
                <li>Procesaremos su pago de forma segura</li>
                <li>Le notificaremos cuando su pedido sea enviado</li>
                <li>Podrá rastrear su envío en tiempo real</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.3 Métodos de Pago</h3>
              <p className="text-gray-700 leading-relaxed">
                Aceptamos tarjetas de crédito, débito, PayPal y transferencias bancarias. 
                Todos los pagos son procesados de forma segura por proveedores certificados.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.4 Disponibilidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Nos esforzamos por mantener la información de stock actualizada, pero no 
                garantizamos la disponibilidad. Si un producto no está disponible, le 
                notificaremos y ofreceremos alternativas o reembolso completo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Envíos y Entregas</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Cobertura:</strong> Enviamos a toda la República Mexicana</li>
                <li><strong>Tiempo de entrega:</strong> 3-7 días hábiles</li>
                <li><strong>Envío gratis:</strong> En compras mayores a $1,000 MXN</li>
                <li><strong>Responsabilidad:</strong> No somos responsables por retrasos de la paquetería</li>
                <li><strong>Dirección:</strong> Verifique que su dirección de envío sea correcta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Devoluciones y Cambios</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.1 Política de Devolución</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Tiene 30 días para devolver productos desde la fecha de recepción</li>
                <li>Los productos deben estar sin usar, con etiquetas originales</li>
                <li>El reembolso se procesará dentro de 5-10 días hábiles</li>
                <li>Los gastos de envío de devolución corren por cuenta del cliente</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.2 Productos No Retornables</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Ropa interior y trajes de baño (por razones de higiene)</li>
                <li>Productos en liquidación o con descuento especial</li>
                <li>Productos personalizados o hechos a medida</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Todo el contenido del sitio, incluyendo textos, gráficos, logos, imágenes y 
                software, es propiedad de Eclothe o sus licenciantes y está protegido por 
                las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Usted NO puede copiar, reproducir, distribuir o crear obras derivadas sin 
                nuestro permiso expreso por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                En la máxima medida permitida por la ley:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>No somos responsables por daños indirectos o consecuentes</li>
                <li>Nuestra responsabilidad total no excederá el precio del producto</li>
                <li>No garantizamos que el sitio esté libre de errores o interrupciones</li>
                <li>No somos responsables por pérdidas de datos o problemas técnicos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Garantías de Productos</h2>
              <p className="text-gray-700 leading-relaxed">
                Todos nuestros productos cuentan con garantía contra defectos de fabricación. 
                La garantía no cubre daños por uso inadecuado, desgaste normal o modificaciones 
                no autorizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Sostenibilidad y Compromisos</h2>
              <p className="text-gray-700 leading-relaxed">
                Eclothe se compromete con prácticas sostenibles. Nuestros productos están hechos 
                con materiales reciclados y procesos responsables con el medio ambiente. 
                Trabajamos con proveedores que comparten nuestros valores ecológicos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta 
                en los tribunales competentes de Jalisco, México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. 
                El uso continuado del sitio constituye aceptación de los términos modificados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre estos Términos y Condiciones, contáctenos:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-800"><strong>Eclothe</strong></p>
                <p className="text-gray-700">Av. Principal 123, Tonalá, Jalisco, México</p>
                <p className="text-gray-700">Email: <a href="mailto:legal@eclothe.com" className="text-green-600 hover:underline">legal@eclothe.com</a></p>
                <p className="text-gray-700">Teléfono: +52 33 1234 5678</p>
                <p className="text-gray-700 mt-2">Horario de atención: Lun-Vie 9:00-18:00</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
