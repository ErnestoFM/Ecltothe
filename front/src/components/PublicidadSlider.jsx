import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Star,
  Undo2,
  Headphones,
} from 'lucide-react';

const PublicidadSlider = () => {
  const banners = [
    'banner1.png',
    'banner4.png',
    'banner1.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardsRef = useRef(null);
  const [isCardsHovered, setIsCardsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= banners.length) {
        setCurrentIndex(0);
        if (sliderRef.current) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      } else {
        setCurrentIndex(nextIndex);
        if (sliderRef.current) {
          sliderRef.current.scrollTo({
            left: nextIndex * sliderRef.current.clientWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, banners.length]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isCardsHovered && cardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          cardsRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          cardsRef.current.scrollLeft += 0.5;
        }
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, [isCardsHovered]);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    goToSlide((currentIndex - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    goToSlide((currentIndex + 1) % banners.length);
  };

  const cards = [
    {
      title: 'Envío seguro',
      description:
        'Tus pedidos llegan protegidos, rastreados y a tiempo sin complicaciones. Garantía de entrega confiable.',
      icon: ShieldCheck,
    },
    {
      title: 'Compra confiable',
      description:
        'Pagos seguros, protección al comprador y seguimiento en tiempo real. Tu tranquilidad es prioridad.',
      icon: CreditCard,
    },
    {
      title: 'Productos de calidad',
      description:
        'Materiales duraderos, certificados y probados por atletas. Diseñados para resistir y rendir.',
      icon: Star,
    },
    {
      title: 'Devoluciones fáciles',
      description:
        'Tienes hasta 30 días para cambiar o devolver sin preguntas. Proceso ágil y sin complicaciones.',
      icon: Undo2,
    },
    {
      title: 'Atención 24/7',
      description:
        'Nuestro equipo te acompaña día y noche por chat, correo o teléfono. Siempre disponibles para ti.',
      icon: Headphones,
    },
  ];

  return (
    <section className="w-full bg-gray-100 overflow-hidden relative">
      {/* Banner */}
      <div className="relative w-full aspect-video pb-16 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-white/60 to-transparent z-10 pointer-events-none"></div>
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Publicidad ${index + 1}`}
              loading="lazy"
              className="w-full aspect-video object-cover flex-shrink-0 snap-center scale-95 sm:scale-100"
            />
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-6 z-30 hidden sm:flex">
        <button
          onClick={handlePrev}
          className="bg-white border border-gray-300 rounded-full p-3 shadow hover:bg-green-600 hover:text-white transition-colors duration-200"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="bg-white border border-gray-300 rounded-full p-3 shadow hover:bg-green-600 hover:text-white transition-colors duration-200"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Cards */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div
          ref={cardsRef}
          onMouseEnter={() => setIsCardsHovered(true)}
          onMouseLeave={() => setIsCardsHovered(false)}
          className="flex justify-start gap-2 sm:gap-6 overflow-x-auto flex-nowrap px-2 sm:px-8 pb-4 sm:pb-6 scroll-smooth scrollbar-hide"
        >
          {[...cards, ...cards].map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-gray-300 border border-gray-400 rounded-lg p-3 min-w-[180px] sm:min-w-[320px] text-left shadow hover:bg-white transition-colors duration-300 scale-90 sm:scale-100"
              >
                <div className="flex items-center mb-2">
                  <Icon size={18} className="text-green-700 mr-2" />
                  <h4 className="text-xs sm:text-base font-semibold text-gray-800">
                    {card.title}
                  </h4>
                </div>
                <p className="text-[10px] sm:text-sm text-gray-700 leading-snug">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
              index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default PublicidadSlider;
