import React, { useState, useEffect } from 'react';
import { Cookie, Settings, Shield, BarChart3, Megaphone, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

const MOCK_API_URL = '../mock/cookiesData.json';

const CookiesPolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    esenciales: true,
    funcionalidad: true,
    analiticas: true,
    marketing: true
  });
  
  const [showBanner, setShowBanner] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    esenciales: false,
    funcionalidad: false,
    analiticas: false,
    marketing: false
  });

  const [cookiesData, setCookiesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapeo de iconos
  const iconMap = {
    Shield: Shield,
    Settings: Settings,
    BarChart3: BarChart3,
    Megaphone: Megaphone
  };

  useEffect(() => {
    // Cargar datos de cookies desde JSON usando fetch
    const fetchCookiesData = async () => {
      try {
        setLoading(true);
        const response = await fetch(MOCK_API_URL);
        if (!response.ok) {
          throw new Error('Error al cargar los datos de cookies');
        }
        const data = await response.json();
        setCookiesData(data);
        setError(null);
      } catch (err) {
        console.error("Error al cargar datos de cookies:", err);
        setError("No se pudieron cargar los datos de cookies.");
      } finally {
        setLoading(false);
      }
    };

    fetchCookiesData();

    // Cargar preferencias guardadas
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setCookiePreferences(JSON.parse(saved));
      setShowBanner(false);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      esenciales: true,
      funcionalidad: true,
      analiticas: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectOptional = () => {
    const onlyEssential = {
      esenciales: true,
      funcionalidad: false,
      analiticas: false,
      marketing: false
    };
    setCookiePreferences(onlyEssential);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowSettings(false);
    setShowBanner(false);
  };

  const toggleCookieType = (type) => {
    if (type === 'esenciales') return;
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 font-medium">Cargando política de cookies...</p>
        </div>
      </div>
    );
  }

  if (error || !cookiesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="text-red-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error al cargar</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Banner de Cookies */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-blue-600 z-50 animate-slide-up">
          <div className="max-w-6xl mx-auto p-6">
            <div className="flex items-start gap-4">
              <Cookie className="text-blue-600 flex-shrink-0 mt-1" size={32} />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🍪 Este sitio utiliza cookies</h3>
                <p className="text-gray-600 mb-4">
                  Usamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para mejorar tu experiencia, 
                  analizar el tráfico y mostrarte contenido relevante. Al hacer clic en "Aceptar todas", aceptas el uso de todas las cookies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={handleRejectOptional}
                    className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Solo esenciales
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="border-2 border-gray-300 text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:border-blue-500 transition"
                  >
                    Configurar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panel de Configuración */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings size={28} />
                  <h2 className="text-2xl font-bold">Configuración de Cookies</h2>
                </div>
                <button onClick={() => setShowSettings(false)} className="hover:bg-white/20 p-2 rounded-lg transition">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {Object.entries(cookiesData).map(([key, data]) => {
                const Icon = iconMap[data.icon];
                const isActive = cookiePreferences[key];
                const isExpanded = expandedSections[key];

                return (
                  <div key={key} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <Icon className="text-blue-600" size={24} />
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800">{data.title}</h3>
                            <p className="text-sm text-gray-600">{data.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {data.required ? (
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                              Siempre activas
                            </span>
                          ) : (
                            <button
                              onClick={() => toggleCookieType(key)}
                              className={`relative w-14 h-7 rounded-full transition ${
                                isActive ? 'bg-green-500' : 'bg-gray-300'
                              }`}
                            >
                              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                                isActive ? 'transform translate-x-7' : ''
                              }`} />
                            </button>
                          )}
                          <button
                            onClick={() => toggleSection(key)}
                            className="p-2 hover:bg-gray-200 rounded-lg transition"
                          >
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-4 bg-white">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-semibold">Cookie</th>
                              <th className="text-left py-2 font-semibold">Propósito</th>
                              <th className="text-left py-2 font-semibold">Duración</th>
                              <th className="text-left py-2 font-semibold">Proveedor</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.cookies.map((cookie, idx) => (
                              <tr key={idx} className="border-b last:border-0">
                                <td className="py-2 font-mono text-xs">{cookie.name}</td>
                                <td className="py-2 text-gray-600">{cookie.purpose}</td>
                                <td className="py-2 text-gray-600">{cookie.duration}</td>
                                <td className="py-2 text-gray-600">{cookie.provider}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="sticky bottom-0 bg-gray-50 p-6 border-t flex gap-3 rounded-b-2xl">
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Guardar preferencias
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenido Principal */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <Cookie className="text-blue-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Política de Cookies</h1>
          <p className="text-lg text-gray-600">Última actualización: 17 de noviembre de 2025</p>
          <button
            onClick={() => setShowSettings(true)}
            className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-flex items-center gap-2"
          >
            <Settings size={20} />
            Configurar mis cookies
          </button>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo (computadora, tablet o smartphone) 
              cuando los visitas. Estos archivos permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo, 
              para que no tengas que volver a configurarlas cada vez que regreses al sitio o navegues de una página a otra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. ¿Qué cookies utilizamos?</h2>
            <p className="text-gray-600 mb-6">
              Nuestro sitio web utiliza diferentes tipos de cookies para diversos propósitos. A continuación, detallamos cada categoría:
            </p>
            
            {Object.entries(cookiesData).map(([key, data]) => {
              const Icon = iconMap[data.icon];
              return (
                <div key={key} className="mb-6 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-blue-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-800">{data.title}</h3>
                    {data.required && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        OBLIGATORIAS
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{data.description}</p>
                  <p className="text-sm text-gray-500">
                    {data.cookies.length} cookie{data.cookies.length !== 1 ? 's' : ''} en esta categoría
                  </p>
                </div>
              );
            })}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Base legal para el uso de cookies</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🔒 Cookies Esenciales</h4>
                <p className="text-gray-600">
                  Utilizamos estas cookies basándonos en nuestro <strong>interés legítimo</strong> de proporcionar un servicio funcional 
                  conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Cookies Opcionales</h4>
                <p className="text-gray-600">
                  Para las cookies de funcionalidad, análisis y marketing, solicitamos tu <strong>consentimiento explícito</strong> 
                  de acuerdo con las regulaciones mexicanas de protección de datos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. ¿Cómo controlar y eliminar las cookies?</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">En nuestro sitio web:</h3>
            <p className="text-gray-600 mb-4">
              Puedes gestionar tus preferencias de cookies en cualquier momento haciendo clic en el botón de configuración:
            </p>
            <button
              onClick={() => setShowSettings(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-6"
            >
              Abrir configuración de cookies
            </button>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">En tu navegador:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Google Chrome</h4>
                <p className="text-sm text-gray-600">Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                <p className="text-sm text-gray-600">Preferencias → Privacidad y seguridad → Cookies y datos del sitio</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Safari</h4>
                <p className="text-sm text-gray-600">Preferencias → Privacidad → Administrar datos de sitios web</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Microsoft Edge</h4>
                <p className="text-sm text-gray-600">Configuración → Privacidad → Cookies y permisos del sitio</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Consecuencias de desactivar cookies</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-gray-700 mb-3">
                Si decides desactivar las cookies opcionales, podrás seguir usando nuestro sitio web, pero algunas funcionalidades 
                pueden verse afectadas:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>No se guardarán tus preferencias de idioma o moneda</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>Tendrás que iniciar sesión cada vez que visites el sitio</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>No podremos mejorar tu experiencia basándonos en tus hábitos de navegación</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>Los anuncios que veas no estarán personalizados según tus intereses</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies de terceros</h2>
            <p className="text-gray-600 mb-4">
              Algunos servicios externos que utilizamos en nuestro sitio web pueden establecer sus propias cookies. 
              No tenemos control sobre estas cookies de terceros:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📊 Google Analytics</h4>
                <p className="text-sm text-gray-600 mb-2">Análisis de tráfico y comportamiento</p>
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 text-sm hover:underline">
                  Desactivar Google Analytics →
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📢 Google Ads</h4>
                <p className="text-sm text-gray-600 mb-2">Publicidad personalizada</p>
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 text-sm hover:underline">
                  Configurar anuncios →
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📘 Facebook Pixel</h4>
                <p className="text-sm text-gray-600 mb-2">Marketing en redes sociales</p>
                <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 text-sm hover:underline">
                  Configurar Facebook →
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎵 TikTok Pixel</h4>
                <p className="text-sm text-gray-600 mb-2">Seguimiento de conversiones</p>
                <a href="https://www.tiktok.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 text-sm hover:underline">
                  Privacidad TikTok →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Actualización de la política</h2>
            <p className="text-gray-600">
              Nos reservamos el derecho de actualizar esta Política de Cookies en cualquier momento. Cualquier cambio será 
              notificado en esta página con la fecha de "Última actualización" modificada. Te recomendamos revisar esta 
              política periódicamente para estar informado sobre cómo utilizamos las cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre nuestra Política de Cookies o deseas ejercer tus derechos ARCO 
              (Acceso, Rectificación, Cancelación y Oposición):
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl space-y-3">
              <p className="font-semibold text-gray-800">📧 Email: privacidad@tutienda.com</p>
              <p className="font-semibold text-gray-800">📞 Teléfono: +52 33 1234 5678</p>
              <p className="font-semibold text-gray-800">📍 Dirección: Tonalá, Jalisco, México</p>
              <p className="text-sm text-gray-600 mt-4">
                Horario de atención: Lunes a Viernes de 9:00 a 18:00 hrs (Hora del Centro de México)
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Esta política cumple con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) 
            y su Reglamento, aplicables en los Estados Unidos Mexicanos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;