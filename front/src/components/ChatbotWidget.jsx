import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! 👋 Soy el asistente virtual de Eclthothe. ¿En qué puedo ayudarte?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus en el input cuando se abre
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Respuestas automáticas del bot
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    // Preguntas frecuentes
    if (msg.includes('hola') || msg.includes('buenos') || msg.includes('qué tal')) {
      return '¡Hola! 😊 Bienvenido a Eclthothe. ¿Te puedo ayudar con algún producto o tienes alguna pregunta?';
    }
    
    if (msg.includes('precio') || msg.includes('costo') || msg.includes('cuánto')) {
      return 'Puedes ver todos los precios en nuestra sección de productos. ¿Buscas algo en específico?';
    }
    
    if (msg.includes('envío') || msg.includes('envio') || msg.includes('entregar')) {
      return '📦 Realizamos envíos a toda la república mexicana. El tiempo de entrega es de 3-5 días hábiles. ¿Necesitas más información?';
    }
    
    if (msg.includes('pago') || msg.includes('pagar') || msg.includes('tarjeta')) {
      return '💳 Aceptamos todas las tarjetas de crédito/débito, PayPal y transferencias. ¡Es 100% seguro!';
    }
    
    if (msg.includes('talla') || msg.includes('tamaño') || msg.includes('medida')) {
      return '📏 Tenemos una guía de tallas completa en cada producto. ¿Necesitas ayuda con alguna prenda específica?';
    }
    
    if (msg.includes('devol') || msg.includes('cambio') || msg.includes('garantía')) {
      return '🔄 Tienes 30 días para devoluciones o cambios. El producto debe estar sin usar y con etiquetas. ¿Necesitas iniciar una devolución?';
    }
    
    if (msg.includes('horario') || msg.includes('hora') || msg.includes('atención')) {
      return '🕐 Nuestro horario de atención es:\nLunes a Viernes: 9:00 AM - 6:00 PM\nSábados: 10:00 AM - 2:00 PM';
    }
    
    if (msg.includes('contacto') || msg.includes('teléfono') || msg.includes('email') || msg.includes('correo')) {
      return '📞 Puedes contactarnos:\n📧 Email: soporte@eclthothe.com\n📱 WhatsApp: +52 33 1234 5678\n¿Prefieres que un agente te contacte?';
    }
    
    if (msg.includes('gracias') || msg.includes('thank')) {
      return '¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte?';
    }
    
    if (msg.includes('adiós') || msg.includes('adios') || msg.includes('bye') || msg.includes('chao')) {
      return '¡Hasta pronto! 👋 No dudes en volver si necesitas algo más. ¡Que tengas un excelente día!';
    }

    // Respuesta por defecto
    return 'Interesante pregunta. 🤔 Déjame conectarte con un agente que pueda ayudarte mejor. Mientras tanto, ¿hay algo más que quieras saber?';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular respuesta del bot con delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Notificar nuevo mensaje si el chat está minimizado
      if (isMinimized) {
        setHasNewMessage(true);
      }
    }, 1000 + Math.random() * 1000); // Delay aleatorio entre 1-2 segundos
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: '📦 Envíos', action: 'Información sobre envíos' },
    { text: '💳 Pagos', action: 'Métodos de pago' },
    { text: '📏 Tallas', action: 'Guía de tallas' },
    { text: '🔄 Devoluciones', action: 'Política de devoluciones' }
  ];

  const handleQuickAction = (action) => {
    setInputValue(action);
    handleSendMessage();
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isMinimized) {
      setHasNewMessage(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ventana del Chat */}
      {isOpen && (
        <div 
          className={`bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 mb-4 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          } flex flex-col`}
        >
          {/* Encabezado del Chat */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold">Eclthothe Support</h3>
                <span className="text-xs text-green-100">
                  {isTyping ? 'Escribiendo...' : 'En línea'}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={toggleMinimize} 
                className="hover:bg-white/20 p-2 rounded-lg transition"
              >
                <Minimize2 size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/20 p-2 rounded-lg transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Contenedor de mensajes */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="text-green-600" size={18} />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                        message.sender === 'user'
                          ? 'bg-green-600 text-white rounded-br-none'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString('es-MX', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>

                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="text-blue-600" size={18} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Indicador de escritura */}
                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Bot className="text-green-600" size={18} />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Acciones rápidas */}
              {messages.length === 1 && (
                <div className="px-4 py-2 border-t border-gray-200 bg-white">
                  <p className="text-xs text-gray-500 mb-2">Acciones rápidas:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInputValue(action.action);
                          setTimeout(handleSendMessage, 100);
                        }}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input de mensaje */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none transition"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-green-600 text-white p-2.5 rounded-xl hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                  >
                    <Send size={20} />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Presiona Enter para enviar
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
            setHasNewMessage(false);
          }}
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Abrir chat de soporte"
        >
          <MessageCircle size={28} />
          
          {/* Badge de notificación */}
          {hasNewMessage && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs font-bold">1</span>
            </span>
          )}

          {/* Animación de pulso cuando hay mensajes nuevos */}
          {hasNewMessage && (
            <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>
          )}
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;